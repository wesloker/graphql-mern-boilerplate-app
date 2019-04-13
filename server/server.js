// Dependencies
const express = require('express');
const graphqlHttp = require('express-graphql');
const bodyParser = require('body-parser');
const helmet = require('helmet');
// Import GraphQL Schema
const graphQlSchema = require('./models/graphql/index');
// API
const router = require('./api/index');
// Loaders
const { usersDataLoader, notesDataLoader } = require('./loaders/index');
// Middlewares
// const isAuth = require('./middlewares/auth')
// Export Server
module.exports = (port, nodeEnv, models, graphQLEndpoint) => {
  // Setting Server
  const app = express();
  app
    .set('port', port)
    .use(helmet())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
      extended: true,
    }))
    // .use(isAuth)
    .use(
      graphQLEndpoint,
      graphqlHttp({
        schema: graphQlSchema,
        graphiql: nodeEnv === 'dev',
        context: {
          models,
          loaders: {
            usersLoader: usersDataLoader(),
            notesLoader: notesDataLoader(),
          },
        },
      }),
    );
  // Setting Server Routers
  router(app);
  // Start Server
  app.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log('Running application...');
  });
};
