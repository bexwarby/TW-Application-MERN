const mongoose = require("mongoose");
const { Schema } = mongoose;

const { instructorSchema } = require("../instructor");

const datesDispoSchema = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const disponibiliteSchema = new Schema({
  instructor: instructorSchema,
  dates: [datesDispoSchema],
});

module.exports = mongoose.model("Disponibilite", disponibiliteSchema);
