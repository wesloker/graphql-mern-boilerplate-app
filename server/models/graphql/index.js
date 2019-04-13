// GraphQL
const { GraphQLSchema } = require('graphql');
// RootQuery And Mutations
const { RootQuery, Mutation } = require('./schema/index');
// Create And Export GraphQLSchema
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
