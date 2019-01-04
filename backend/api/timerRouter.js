const router = require("express").Router();
const accountSid = process.env.ACCOUNT_SID || "not authorized";
const authToken = process.env.TWILIO_TOKEN || "not authorized";
const twilioPhone = process.env.TWILIO_PHONE;
const contactPhone = process.env.CONTACT_PHONE;
const client = require("twilio")(accountSid, authToken);

const Users = require("../models/User");

// dynamically creates image url for map with latest geodata latitudes and longitudes off the db.
// for demo purposes, this function will not be run inside fireSMS and the example url is hard-coded in the .env file
function retrieveUrl(user) {
  const colors = ["blue", "green", "yellow", "red"];
  let gmapUrl =
    "https://maps.googleapis.com/maps/api/staticmap?&size=300x300&scale=2&maptype=hybrid&";
  user.events.geoData.forEach((point, index) => {
    gmapUrl += `markers=color:${colors[index]}%7C${point}&`;
  });
  gmapUrl += `key=${process.env.GOOGLE_MAP_API_KEY}`;
  return gmapUrl;
}

function fireContactSMS(userCheck) {
  if (accountSid === "not authorized" || authToken === "not authorized") {
    console.log("contactSMS fire attempt--twilio not authorized");
  } else {
    client.messages
      .create({
        // body: retrieveUrl(user), // in production, this function would fire and return the dynamic url
        body: `You are receiving this message because ${
          userCheck.username
        } has missed a scheduled checkin with JustNcase. Here is a link to their last know locations: ${
          process.env.GEO_IMAGE_URL
        }`, // in development/demo, hardcoding the url for the image link in
        from: twilioPhone,
        to: contactPhone
      })
      .then(message => {
        console.log(message.sid);
      })
      .done();
  }
}

// in production, the number this fires to will be separate from that used in fireContactSMS. for demo/dev purposes, both will be sent to same number
// fires an SMS to the user's number alerting them before each checkin deadline that the checkin is approaching and they can now check in
function fireUserSMS(userCheck) {
  if (accountSid === "not authorized" || authToken === "not authorized") {
    console.log("userSMS fire attempt--twilio not authorized");
  } else {
    client.messages
      .create({
        body: `${userCheck.username}, it\'s time to check in with JustNcase!`,
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
  const user = await Users.findById(req.params._id, (err, user) => {
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

      (err, user) => {
        if (err) {
          console.log(err);
          res.end();
        }
      }
    );

    // init values to be used in checkInDeadline
    let checkinWindow = 0;

    if (interval < 60 * 60 * 1000) {
      //interval is less than an hour, will be percentage-based
      checkinWindow = interval / 6;
    } else if (interval < 6 * 60 * 60 * 1000) {
      //interval still less than 6 hours, will be 15 min
      checkinWindow = 15 * 60 * 1000;
    } else if (interval < 24 * 60 * 60 * 1000) {
      // interval still less than 1 day, will be 30 min
      checkinWindow = 30 * 60 * 1000;
    } else {
      //interval longer than 1 day, will be 1 hour
      checkinWindow = 60 * 60 * 1000;
    }

    count++;

    // this call alerts user they need to check in (fires no matter what)
    //todo: pass in checkinWindow to later dynamically tell the user how much time the user has to check in
    fireUserSMS(userCheck);

    // then setTimeout that fires waiting the checkinWindow amount of time, when it runs it checks the db to see if user is checked in
    const checkInDeadline = setTimeout(async () => {
      let userCheck = await Users.findById(
        req.params._id,

        (err, user) => {
          if (err) {
            console.log(err);
            res.end();
          }
        }
      );

      if (count >= duration / interval) {
        // event has ended
        console.log(userCheck.events.checkedIn);
        if (userCheck.events.checkedIn) {
          // event ended and was checked in
          console.log("\n=== event ended, final checkin on time ===\n");
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
                console.log("\n=== checkedIn changed back to false ===\n");
              }
            }
          );
        } else {
          // event ended but user was NOT checked in

          console.log("count: ", count, "Event ended but missed final checkin");
          fireContactSMS(userCheck);
        }
        clearInterval(timer); // clear interval no matter what, event has ended
      } else {
        // event still going
        console.log(userCheck.events.checkedIn);
        if (userCheck.events.checkedIn) {
          // event still going and was checked in

          console.log(
            "count: ",
            count,
            "event still going, checked in on time"
          );
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
                console.log("\n=== checkedIn changed back to false ===\n");
              }
            }
          );
        } else {
          // event still going and missed check in

          console.log("count: ", count, "missed check in");
          fireContactSMS(userCheck);
        }
      }
    }, checkinWindow);
  }, interval);
});

module.exports = router;
