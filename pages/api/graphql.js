import {ApolloServer, gql} from 'apollo-server-micro';
import {mergeResolvers, mergeTypeDefs} from 'graphql-tools';
import connectDb from '../../lib/mongoose';
import {coursesResolvers} from '../../src/api/courses/resolvers';
import {coursesMutations} from '../../src/api/courses/mutations';
import Courses from '../../src/api/courses/Courses.graphql';

const resolvers = mergeResolvers([coursesResolvers, coursesMutations]);

const typeDefs = mergeTypeDefs([Courses]);

const apolloServer = new ApolloServer({typeDefs, resolvers});

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({path: '/api/graphql'});
export default connectDb(server);
