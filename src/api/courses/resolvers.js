import {GraphQLScalarType} from 'graphql';
import {Kind} from 'graphql/language';

import Courses from './courses';

export const coursesResolvers = {
  Query: {
    async courses() {
      try {
        const courses = await Courses.find();
        return courses;
      } catch (e) {
        console.log('e', e);
      }
    },
  },

  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Date custom scalar',
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return new Date(ast.value);
      }
      return null;
    },
  }),
};
