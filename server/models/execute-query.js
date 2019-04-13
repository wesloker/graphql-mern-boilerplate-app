// GraphQL
const { graphql } = require('graphql');
// Import GraphQLSchemas
const schema = require('./graphql/index');

module.exports = (query, cb, variableValues) => {
  graphql(schema, query, null, null, variableValues)
    .then(res => cb(res))
    .catch(err => console.log(err));
};
