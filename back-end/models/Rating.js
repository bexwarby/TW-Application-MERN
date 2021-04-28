const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingSchema = new Schema({
  ratingCode: { type: Number, require: true },
  name: { type: String, require: true },
});
module.export = mongoose.model("Rating", ratingSchema);
