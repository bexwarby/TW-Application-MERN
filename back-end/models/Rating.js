const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingSchema = new Schema({
  ratingCode: { type: Number, require: true },
  ratingName: { type: String, require: true },
});
module.export = mongoose.model("Rating", ratingSchema);
