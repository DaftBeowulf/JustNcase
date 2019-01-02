const router = require("express").Router();

const Users = require("../models/User");

router.get("/", (req, res) => {
  Users.find({}, (err, returnedUsers) => {
    if (err) {
      console.log(err);
    } else {
      res.json(returnedUsers);
    }
  });
});

// get user by id
router.get("/:_id", (req, res) => {
  Users.findById(req.params._id, (err, user) => {
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
  const contacts = req.body.contacts;
  const events = req.body.events;
  user.contacts = contacts;
  user.events = events;
  user.save().then((err, savedUser) => {
    if (err) {
      console.log("ERROR: ", err);
      res.end();
    } else {
      res.send("user created");
    }
  });
});

// edit user by id
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

module.exports = router;
