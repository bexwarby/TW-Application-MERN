const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  instructor: { type: Boolean, required: true },
  admin: { type: Boolean, required: true },
  trainee: { type: Boolean, required: true },
  flightHours: { type: Number, required: true },
  licenceFile: { type: String, required: false },
  birthday: { type: String, required: false },
  bio: { type: String, required: false },
});

module.exports = mongoose.model("User", UserSchema);
