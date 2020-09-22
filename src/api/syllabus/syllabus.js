import mongoose, {Schema} from 'mongoose';

// const LessonsSchema = new Schema({
//   lesson: {
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
  // description: {
  //   type: String,
  //   required: false,
  // },
  // courses: [LessonsSchema],
});

export default mongoose.models.syllabus || mongoose.model('syllabus', SyllabusSchema);
