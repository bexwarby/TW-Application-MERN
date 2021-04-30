const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  fullName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
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

UserSchema.pre("save", async function (next) {
  if (!this.password || this.password.search(/$2[a-z].{57}/) !== -1) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next();
  }
});

module.exports = mongoose.model("User", UserSchema);
