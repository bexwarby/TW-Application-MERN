const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  instructor: { type: Boolean, required: true },
  admin: { type: Boolean, required: true },
  trainee: { type: Boolean, required: true },
  flightHours: { type: Number, required: true },
  licenceFile: { type: String },
  birthDay: { type: String },
  photo: { type: String },
  bio: { type: String },
  dateInsert: { type: Date, required: true },
  enabled: { type: Boolean, required: true }, //  todo: instructor enabled = false and trainee true
});

module.exports = mongoose.model("User", UserSchema);
