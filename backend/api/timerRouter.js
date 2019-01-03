const router = require("express").Router();
const accountSid = process.env.ACCOUNT_SID || "not authorized";
const authToken = process.env.TWILIO_TOKEN || "not authorized";
const twilioPhone = process.env.TWILIO_PHONE;
const contactPhone = process.env.CONTACT_PHONE;
const client = require("twilio")(accountSid, authToken);

const Users = require("../models/User");

// dynamically creates image url for map with latest geodata latitudes and longitudes off the db.
// for demo purposes, this function will not be run inside fireSMS and the example url is hard-coded in the .env file
function retrieveUrl(event) {
  const colors = ["blue", "green", "yellow", "red"];
  let gmapUrl =
    "https://maps.googleapis.com/maps/api/staticmap?&size=300x300&scale=2&maptype=hybrid&";
  event.geoData.forEach((point, index) => {
    gmapUrl += `markers=color:${colors[index]}%7C${point}&`;
  });
  gmapUrl += `key=${process.env.GOOGLE_MAP_API_KEY}`;
  return gmapUrl;
}

function fireSMS(event) {
  if (accountSid === "not authorized" || authToken === "not authorized") {
    console.log("SMS fire--twilio not authorized");
  } else {
    console.log("SMS fire");

    client.messages
      .create({
        // body: retrieveUrl(event), // in production, this function would fire and return the dynamic url
        body: process.env.GEO_IMAGE_URL, // in development/demo, hardcoding the url for the image link in
        from: twilioPhone,
        to: contactPhone
      })
      .then(message => {
        console.log(message.sid);
      })
      .done();
  }
}

// endpoint to start timer
router.get("/start/:_id", async (req, res) => {
  const user = await Users.findById(req.params._id, "events", (err, user) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.json(user);
    }
  });

  const event = user.events;
  const interval = event.checkinInterval;
  const duration = event.eventDuration;

  let count = 0;

  const timer = setInterval(async () => {
    let userCheck = await Users.findById(
      req.params._id,
      "events",
      (err, user) => {
        if (err) {
          console.log(err);
          res.end();
        } else {
          console.log("got user");
        }
      }
    );

    count++;
    if (count >= duration / interval || userCheck.events.checkedIn) {
      if (userCheck.events.checkedIn) {
        console.log("checked in");
        Users.findByIdAndUpdate(
          req.params._id,
          {
            events: { ...event, checkedIn: false }
          },
          { new: true },
          (err, user) => {
            if (err) {
              console.log(err);
            } else {
              console.log("checked in success");
            }
          }
        );
      } else {
        console.log(count);
        console.log("Event complete");
        clearInterval(timer);
      }
    } else {
      console.log(count);
      // passing event in to take geodata off most recent db call to build googlemaps URL for SMS fire
      fireSMS(event);
    }
  }, interval);
});

module.exports = router;
