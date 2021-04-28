const mongoose = require("mongoose");
const { Schema } = mongoose;

const lessonSchema = new Schema({
  userId: { type: String, required: true },
  user_userId: { type: String, required: true },
  equipment: { type: String, required: true },
  languageCodeIso: { type: String, required: true },
  hoursRequested: { type: String, required: true },
  timeTeaching: { type: String, required: true },
});
module.export = mongoose.model("Lesson", lessonSchema);
