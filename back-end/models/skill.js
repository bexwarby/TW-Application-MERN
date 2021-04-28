const mongoose = require("mongoose");
const { Schema } = mongoose;

const languageSchema = new Schema({
  languagecodeiso: { type: String, required: true },
  description: { type: String, required: true },
});
module.exports = mongoose.model("language", contactSchema);
