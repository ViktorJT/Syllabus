import Syllabus from './syllabus';

export const syllabusResolvers = {
  Query: {
    async syllabus() {
      try {
        const syllabus = await Syllabus.find();
        return syllabus;
      } catch (error) {
        console.error('error', error);
      }
    },
  },

  // Lessons stuff goes here
};
