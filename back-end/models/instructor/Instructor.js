const mongoose = require("mongoose");
const { Schema } = mongoose;

const instructorSchema = new Schema({
  instructorName: { type: String, required: true },
  userId: { type: String, required: true },
  notation: { type: String, required: true },
});
module.exports = mongoose.model("Instructor", instructorSchema);
