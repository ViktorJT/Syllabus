import {ApolloServer} from 'apollo-server-micro';
import {mergeResolvers, mergeTypeDefs} from 'graphql-tools';
import connectDb from '../../lib/mongoose';
import {syllabusResolvers} from '../../src/api/syllabus/resolvers';
import {syllabusMutations} from '../../src/api/syllabus/mutations';
import Syllabus from '../../src/api/syllabus/Syllabus.graphql';

const resolvers = mergeResolvers([syllabusResolvers, syllabusMutations]);

const typeDefs = mergeTypeDefs([Syllabus]);

const apolloServer = new ApolloServer({typeDefs, resolvers});

export const config = {
  api: {
    bodyParser: false,
  },
};

const server = apolloServer.createHandler({path: '/api/graphql'});
export default connectDb(server);
