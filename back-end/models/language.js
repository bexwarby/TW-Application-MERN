const mongoose = require("mongoose");
const { Schema } = mongoose;

const skillSchema = new Schema({
  ratingcode: { type: String, required: true },
  moduleid: { type: String, required: true },
  userid: { type: String, required: true },
  languagecodeiso: { type: String, required: true },
});
module.exports = mongoose.model("skill", skillSchema);
