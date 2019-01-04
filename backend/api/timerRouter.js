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

function fireContactSMS(user) {
  if (accountSid === "not authorized" || authToken === "not authorized") {
    console.log("contactSMS fire attempt--twilio not authorized");
  } else {
    if (user.events.checkedIn) {
      // user checked in at checkpoint
      client.messages
        .create({
          body: `${
            user.username
          } has safely checked in at a scheduled checkpoint with JustNcase!`,
          from: twilioPhone,
          to: contactPhone
        })
        .then(message => {
          console.log(message.sid);
        })
        .done();
    } else {
      // user missed a checkin
      client.messages
        .create({
          body: `It looks like ${
            user.username
          } just missed a scheduled check in. Reach out to them as soon as you can, here are some breadcrumbs they've left behind JustNcase: ${
            // body: retrieveUrl(user), // in production, this function would fire and return the dynamic url
            process.env.GEO_IMAGE_URL // in development/demo, hardcoding the url for the image link in
          }`,

          from: twilioPhone,
          to: contactPhone
        })
        .then(message => {
          console.log(message.sid);
        })
        .done();
    }
  }
}

// in production, the number this fires to will be separate from that used in fireContactSMS. for demo/dev purposes, both will be sent to same number
// fires an SMS to the user's number alerting them before each check in deadline that the check in is approaching and they can now check in
function fireUserSMS(user) {
  if (accountSid === "not authorized" || authToken === "not authorized") {
    console.log("userSMS fire attempt--twilio not authorized");
  } else {
    client.messages
      .create({
        body: `${user.username}, it\'s time to check in with JustNcase!`,
        from: twilioPhone,
        to: contactPhone
      })
      .then(message => {
        console.log(message.sid);
      })
      .done();
  }
}

// notify contact that user has begun a new event
function eventStartSMS(user) {
  if (accountSid === "not authorized" || authToken === "not authorized") {
    console.log("contactSMS fire attempt--twilio not authorized");
  } else {
    // simulate dynamic contact selections, for demo assume user has already selected this specific contact
    let contact = user.contacts[0];
    client.messages
      .create({
        body: `${contact.name}, you are receiving this message because ${
          user.username
        } has just embarked on a ${
          user.events.name
        } adventure and selected you as an emergency contact! You may receive more notifications if ${
          user.username
        } misses a checkin with the app or when their adventure is completed, thank you for being their source of support JustNcase!`,
        from: twilioPhone,
        to: contactPhone
      })
      .then(message => {
        console.log(message.sid);
      })
      .done();
  }
}

// notify contact that user has successfully completed their event
function eventEndSMS(user) {
  if (accountSid === "not authorized" || authToken === "not authorized") {
    console.log("contactSMS fire attempt--twilio not authorized");
  } else {
    let contact = user.contacts[0];
    client.messages
      .create({
        body: `${contact.name}, ${
          user.username
        } has successfully finished their ${
          user.events.name
        } adventure! Thanks for being there for them, JustNcase! :)`,
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

  // function to notify contact that user has started trip and will be receiving more notifications
  eventStartSMS(user);

  const timer = setInterval(async () => {
    let user = await Users.findById(
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
    //todo: pass in checkinWindow to fireUserSMS to dynamically tell the user how much time they have to check in
    fireUserSMS(user);

    // then setTimeout that fires after waiting the checkinWindow amount of time, when it runs it checks the db to see if user is checked in or not
    const checkInDeadline = setTimeout(async () => {
      let user = await Users.findById(req.params._id, (err, user) => {
        if (err) {
          console.log(err);
          res.end();
        }
      });

      if (count >= duration / interval) {
        // event has ended
        if (user.events.checkedIn) {
          // event ended and was checked in
          eventEndSMS(user);
        } else {
          // event ended but user was NOT checked in
          fireContactSMS(user);
        }
        clearInterval(timer); // clear interval no matter what, event has ended
      } else {
        // event still going
        if (user.events.checkedIn) {
          // event still going and was checked in
          fireContactSMS(user);
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
          fireContactSMS(user);
        }
      }
    }, checkinWindow);
  }, interval);
});

module.exports = router;
