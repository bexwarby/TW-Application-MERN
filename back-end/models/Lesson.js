const mongoose = require("mongoose");
const { Schema } = mongoose;

const lessonSchema = new Schema({
  userId: { type: String, required: true },
  user_userId: { type: String, required: true },
  equipement: { type: String, required: true },
  languageCodeIso: { type: String, require: true },
});
module.export = mongoose.model("Lesson", lessonSchema);
