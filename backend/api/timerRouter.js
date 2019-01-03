const router = require("express").Router();

const Users = require("../models/User");

function intervalFunc(interval, duration) {
  console.log("SMS fire");
}

// endpoint to start timer
router.get("/start/:_id", async (req, res) => {
  const user = await Users.findById(req.params._id, "events", (err, user) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      console.log(user);
      res.json(user);
    }
  });

  const event = user.events[0];
  const interval = event.checkinInterval;
  const duration = event.eventDuration;
  console.log("Event:", event);
  console.log("Interval: ", interval);
  let count = 0;

  const timer = setInterval(() => {
    count++;
    if (count === duration / interval || event.checkedIn) {
      if (event.checkedIn) {
        console.log("checked in");
        // clearInterval(timer);
        // timer;
        //   timer(intervalFunc(interval, duration), interval);
        Users.findByIdAndUpdate(user._id, { ...event, checkedIn: false });
      } else {
        console.log(count);
        console.log("Event complete");
        clearInterval(timer);
      }
    } else {
      console.log(count);
      intervalFunc(interval, duration);
    }
  }, interval);
});

// endpoint to clear/reset timer
router.get("/clear/:_id", (req, res) => {});

module.exports = router;
