import Syllabuses from './syllabuses';

export const syllabusResolvers = {
  Query: {
    async syllabus() {
      try {
        const syllabus = await Syllabuses.find();
        return syllabus;
      } catch (error) {
        console.error('error', error);
      }
    },
  },

  // Lessons stuff goes here
};
