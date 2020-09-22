import Syllabuses from './syllabuses';

export const syllabusMutations = {
  Mutation: {
    // ADD CONTEXT & AUTH LATER
    async addSyllabus(_, {syllabus}) {
      try {
        const newSyllabus = await Syllabuses.create({
          ...syllabus,
        });
        return newSyllabus;
      } catch (error) {
        console.error('error', error);
      }
    },

    // async addLesson(_, {syllabusId}) {
    //   try {
    //     console.log('addLesson');
    //   } catch (error) {
    //     console.error('error', error);
    //   }
    // },

    // async removeLesson(_, {syllabusId}) {
    //   try {
    //     console.log('removeLesson');
    //   } catch (error) {
    //     console.error('error', error);
    //   }
    // },
  },
};
