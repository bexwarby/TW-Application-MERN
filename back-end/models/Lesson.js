const mongoose = require("mongoose");
const { Schema } = mongoose;

const lessonSchema = new Schema({
  userId: { type: String, required: true },
  user_userId: { type: String, required: true },
  equipment: { type: String, required: true },
  languageCodeIso: { type: String, require: true },
});
module.exports = mongoose.model("Lesson", lessonSchema);
