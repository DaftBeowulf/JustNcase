const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  contacts: [{ name: String, number: Number }],
  events: {
    name: String,
    eventDuration: Number,
    checkinInterval: Number,
    checkedIn: { type: Boolean, default: false }
  }
});

const Users = mongoose.model("User", UserSchema);

module.exports = Users;
