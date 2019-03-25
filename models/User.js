const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String,
    isRequired: true
  },
  email: {
    type: String,
    isRequired: true
  },
  password: {
    type: String,
    isRequired: true
  }
})

module.exports = mongoose.model('User', UserSchema);