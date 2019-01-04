const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  phone_number: String,
  email: String,
  // contacts in array to allow multiple contacts being added
  contacts: [{ name: String, number: String }],
  // events is an object instead of array of objects as user will only be allowed to
  // be on one event at a time
  events: {
    name: String,
    eventDuration: Number,
    checkinInterval: Number,
    checkedIn: { type: Boolean, default: false },
    // assume lat & long will be stored as single string with form of:
    // `{latitude},{longitude}` ex: "44.740259,-110.09477"
    geodata: [{ latLong: String }]
  }
});

const Users = mongoose.model("User", UserSchema);

module.exports = Users;
