// Env variables
module.exports = {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  mongoUser: process.env.DB_USER,
  mongoPassword: process.env.DB_PASSWORD,
  mongoDB: process.env.DB_NAME,
  debug: process.env.DEBUG,
  graphQLEndpoint: process.env.GRAPHQL_ENDPOINT,
};
