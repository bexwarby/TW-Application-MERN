const mongoose = require("mongoose");
const { Schema } = mongoose;

const stepSchema = new Schema({
  stepName: { type: String, required: true },
});
module.exports = mongoose.model("Step", stepSchema);