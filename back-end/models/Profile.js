const mongoose = require("mongoose");
const { Schema } = mongoose;

const { ratingSchema } = require("../models/Rating");
const { stepSchema } = require("../models/Step");

const profileStep = new Schema({
  modulesId: { type: String, required: true },
  step: stepSchema,
  ratings: [ratingSchema],
});

const profileSchema = new Schema({
  instructorId: { type: String, required: true },
  profileSteps: [profileStep],
});

module.exports = mongoose.model("Profile", profileSchema);
