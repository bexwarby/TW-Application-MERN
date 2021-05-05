const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  /** GENERAL */
  // front/InstructorSignUp/1Name :
  fullName: { type: String },
  // front/InstructorSignUp/13Email :
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  instructor: { type: Boolean },
  admin: { type: Boolean },
  trainee: { type: Boolean },

  /** SPECIFIC */
  // front/InstructorSignUp/2HoursTotal :
  flightHours: Number,
  // front/InstructorSignUp/3Ratings :
  ratingName: { type: String },
  // front/InstructorSignUp/4Types :
  moduleName: String,
  // front/InstructorSignUp/5Equipment :
  equipmentName: { type: String },
  // front/InstructorSignUp/6Software :
  software: { type: String },
  // front/InstructorSignUp/7HoursClass :
  hoursRequested: { type: String },
  // front/InstructorSignUp/8Time :
  timeTeaching: { type: String },
  // front/InstructorSignUp/9Language :
  language: String,
  // front/InstructorSignUp/10LicenseFile :
  licenceFile: String,
  // front/InstructorSignUp/11Birthday :
  birthDay: String,
  // front/InstructorSignUp/12Bio :
  bio: String,

  photo: String,

  enabled: { type: Boolean }, //  todo: instructor enabled = false and trainee true
});

UserSchema.pre("save", async function (next) {
  if (!this.password || this.password.search(/$2[a-z].{57}/) === -1) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);

    next();
  }
});

module.exports = mongoose.model("User", UserSchema);
