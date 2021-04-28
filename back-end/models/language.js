const mongoose = require("mongoose");
const { Schema } = mongoose;

const skillSchema = new Schema({
  ratingCode: { type: String, required: true },
  moduleId: { type: String, required: true },
  userId: { type: String, required: true },
  languageCodeIso: { type: String, required: true },
});
module.exports = mongoose.model("skill", skillSchema);
