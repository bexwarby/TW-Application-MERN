const mongoose = require("mongoose");
const { Schema } = mongoose;

const moduleSchema = new Schema({
  name: { type: String, required: true },
  moduleparentid: { type: String, required: true },
});
module.exports = mongoose.model("Modules", moduleSchema);
