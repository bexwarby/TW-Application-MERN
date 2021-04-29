const mongoose = require("mongoose");
const { Schema } = mongoose;

export default ratingSchema = new Schema({
  ratingName: { type: String, require: true },
});

module.export = mongoose.model("Rating", ratingSchema);
