import mongoose, {Schema} from 'mongoose';

const LessonSchema = new Schema({
  url: {
    type: String,
    // required: true,
    // unique: true,
  },
  // description: {
  //   type: String,
  // },
});

export const SyllabusSchema = new Schema({
  name: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: false,
  },
  lessons: [LessonSchema],
});

export default mongoose.models.syllabus || mongoose.model('syllabus', SyllabusSchema);
