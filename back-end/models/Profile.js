import { ratingSchema } from "Rating";
import { stepSchema } from "Module";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const profileStep = new Schema({
  step: stepSchema,
  ratings: [ratingSchema],
});

const profileSchema = new Schema({
  instructorId: { type: String, required: true },
  modulesId: [{ type: String, required: true }],
  profileSteps: [profileStep],
});

module.exports = mongoose.model("Profile", profileSchema);