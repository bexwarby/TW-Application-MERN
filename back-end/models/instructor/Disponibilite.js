import { instructorSchema } from "../instructor";

const datesDispoSchema = new Schema({
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});
const disponibiliteSchema = new Schema({
  instructor: instructorSchema,
  dates: [datesDispoSchema],
});

module.export = mongoose.model("Disponibilite", disponibiliteSchema);
