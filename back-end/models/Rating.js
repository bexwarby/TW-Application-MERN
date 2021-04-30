const mongoose = require("mongoose");
const { Schema } = mongoose;
//4
const ratingSchema = new Schema({
  ratingName: { type: String, require: true },
});

module.export = mongoose.model("Rating", ratingSchema);
