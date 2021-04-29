const mongoose = require("mongoose");
const { Schema } = mongoose;

const traineeSchema = new Schema({
  traineeName: { type: String, required: true },
  userId: { type: String, required: true },
  notation: { type: String, required: true },
});
module.export = mongoose.model("Trainee", traineeSchema);
