import Courses from './courses';

export const coursesMutations = {
  Mutation: {
    async addCourse(_, {course}) {
      try {
        const newCourse = await Courses.create({
          ...course,
        });
        return newCourse;
      } catch (e) {
        console.log(e);
      }
    },

    async addLesson(_, {courseId, date}) {
      try {
        date.setHours(0, 0, 0, 0);
        const course = await Courses.findOneAndUpdate(
          {
            _id: courseId,
            'lessons.date': {
              $ne: date,
            },
          },
          {
            $addToSet: {
              lessons: {
                date,
              },
            },
          }
        );
        return course;
      } catch (e) {
        console.log('e', e);
      }
    },

    async removeLesson(_, {courseId, lessonId}) {
      try {
        const course = await Courses.findOneAndUpdate(
          {
            _id: courseId,
          },
          {
            $pull: {
              lessons: {
                _id: lessonId,
              },
            },
          }
        );
        return course;
      } catch (e) {
        console.log('e', e);
      }
    },
  },
};
