const mongoose = require("mongoose");
const { Schema } = mongoose;

const moduleSchema = new Schema({
  moduleName: { type: String, required: true },
  moduleParentId: { type: String, required: true },
});
module.exports = mongoose.model("Modules", moduleSchema);
