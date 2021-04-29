const mongoose = require("mongoose");
const { Schema } = mongoose;

const moduleSchema = new Schema({
  moduleName: { type: String, required: true },
  nbHours: { type: Number, required: true },
  price: { type: Number, required: true },
  steps: [],
});

module.exports = mongoose.model("Module", moduleSchema);
