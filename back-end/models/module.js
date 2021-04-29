import { ratingSchema } from "Rating";

const mongoose = require("mongoose");
const { Schema } = mongoose;

export default stepSchema = new Schema({
  stepName: { type: String, required: true },
});

const moduleSchema = new Schema({
  moduleName: { type: String, required: true },
  nbHours: { type: Number, required: true },
  price: { type: Number, required: true },
  steps: [stepSchema],
  ratings: [ratingSchema],
});

module.exports = mongoose.model("Module", moduleSchema);
