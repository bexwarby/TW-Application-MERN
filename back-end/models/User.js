const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  instructor: { type: Boolean, required: true },
  admin: { type: Boolean, required: true },
  trainee: { type: Boolean, required: true },
  flightHours: { type: Number, required: true },
  licenceFile: { type: String, required: true },
  birthday: { type: String, required: true },
  photo: { type: String, required: true },
  bio: { type: String, required: true },
  dateInsert: { type: Date, required: true },
  enabled: { type: Boolean, required: true },
});

module.exports = mongoose.model("User", UserSchema);
