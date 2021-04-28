const mongoose = require("mongoose");
const { Schema } = mongoose;

const languageSchema = new Schema({
  languageCodeIso: { type: String, required: true },
  language: { type: String, required: true },
});
module.exports = mongoose.model("language", languageSchema);
