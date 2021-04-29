const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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

UserSchema.pre("save", async function (next) {
  if (!this.password || this.password.search(/$2[a-z].{57}/) !== -1) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next();
  }
});

module.exports = mongoose.model("User", UserSchema);
