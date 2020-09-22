// Database collection
import mongoose, {Schema} from 'mongoose';

const LessonSchema = new Schema({
  date: {
    type: Date,
    required: true,
    unique: true,
  },
});

export const CourseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lessons: [LessonSchema],
});

export default mongoose.models.Courses || mongoose.model('Courses', CourseSchema);
