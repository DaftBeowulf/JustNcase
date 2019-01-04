const router = require("express").Router();

const Users = require("../models/User");

// get user by id: to be hit with componentDidMount in front end to load user data
router.get("/:username", (req, res) => {
  Users.findOne({ username: req.params.username }, (err, user) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      console.log("success");
      res.json(user);
    }
  });
});

// create new user
router.post("/", (req, res) => {
  const user = new Users();
  user.username = req.body.username;
  user.phone_number = req.body.phone_number;
  user.email = req.body.email;
  user.contacts = req.body.contacts;
  user.events = req.body.events;

  user.save().then((err, savedUser) => {
    if (err) {
      console.log("ERROR: ", err);
      res.end();
    } else {
      res.send("user created");
    }
  });
});

// edit user without starting an event (also hit by front end to change user.events.checkedIn to 'true' to cancel SMS fire upon missed checkin)
router.put("/:_id", (req, res) => {
  Users.findByIdAndUpdate(
    req.params._id,
    { ...req.body },
    { new: true },
    (err, user) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.json(user);
      }
    }
  );
});

// start event by editing user by id. will also redirect to timer route to start node timer
router.put("/event/:_id", (req, res) => {
  Users.findByIdAndUpdate(
    req.params._id,
    { ...req.body },
    { new: true },
    (err, user) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.redirect(`/timer/start/${req.params._id}`);
      }
    }
  );
});

module.exports = router;
