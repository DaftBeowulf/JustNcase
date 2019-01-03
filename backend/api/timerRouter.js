require("dotenv").config();

const router = require("express").Router();
const accountSid = process.env.ACCOUNT_SID || "not authorized";
const authToken = process.env.TWILIO_TOKEN || "not authorized";
const twilioPhone = process.env.TWILIO_PHONE;
const contactPhone = process.env.CONTACT_PHONE;
const client = require("twilio")(accountSid, authToken);

const Users = require("../models/User");

function intervalFunc() {
  if (accountSid === "not authorized" || authToken === "not authorized") {
    console.log("SMS fire--twilio not authorized");
  } else {
    console.log("SMS fire");
    client.messages
      .create({
        body: "Adam missed his check in",
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
      //   console.log(user);
      res.json(user);
    }
  });

  const event = user.events;
  const interval = event.checkinInterval;
  const duration = event.eventDuration;
  console.log("Event:", event);

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
          console.log("Checkin block");
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
      intervalFunc();
    }
  }, interval);
});

// endpoint to clear/reset timer
router.get("/clear/:_id", (req, res) => {});

module.exports = router;
