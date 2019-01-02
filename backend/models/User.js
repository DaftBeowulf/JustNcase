const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema ({
  username: String,
  contacts: [{ name: String, number: Number}],
  events: [{ name: String, eventDuration: Number, checkinInterval: Number }]
})

const Users = mongoose.model('User', UserSchema)

module.exports = Users
