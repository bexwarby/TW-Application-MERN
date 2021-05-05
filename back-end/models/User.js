const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  /** GENERAL */
  // front/InstructorSignUp/1Name :
  fullName: { type: String, required: true },
  // front/InstructorSignUp/13Email :
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  instructor: { type: Boolean, required: true },
  admin: { type: Boolean, required: true },
  trainee: { type: Boolean, required: true },

  /** SPECIFIC */
  // front/InstructorSignUp/2HoursTotal :
  flightHours: Number,
  // front/InstructorSignUp/3Ratings :
  ratingName: [String],
  // front/InstructorSignUp/4Types :
  moduleName: [String],
  // front/InstructorSignUp/5Equipment :
  equipmentName: [String],
  // front/InstructorSignUp/6Software :
  software: [String],
  // front/InstructorSignUp/7HoursClass :
  hoursRequested: String,
  // front/InstructorSignUp/8Time :
  timeTeaching: String,
  // front/InstructorSignUp/9Language :
  language: [String],
  // front/InstructorSignUp/10LicenseFile :
  licenceFile: String,
  // front/InstructorSignUp/11Birthday :
  birthDay: String,
  // front/InstructorSignUp/12Bio :
  bio: String,
  
  photo: String,

  dateInsert: { type: Date, required: true },
  
  enabled: { type: Boolean, required: true }, //  todo: instructor enabled = false and trainee true
});

UserSchema.pre("save", async function (next) {
  if (!this.password || this.password.search(/$2[a-z].{57}/) === -1) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }
    next();
});

module.exports = mongoose.model("User", UserSchema);
