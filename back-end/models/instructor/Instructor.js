export default instructorSchema = new Schema({
  instructorName: { type: String, required: true },
  instructorId: { type: String, required: true },
  notation: { type: String, required: true },
});
