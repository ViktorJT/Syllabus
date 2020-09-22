import mongoose, {Schema} from 'mongoose';

// const LessonsSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   description: {
//     type: String,
//   },
//   url: {
//     type: String,
//     required: true,
//     unique: true,
//   },
// });

export const SyllabusSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  // lessons: [LessonsSchema],
});

export default mongoose.models.syllabus || mongoose.model('syllabus', SyllabusSchema);
