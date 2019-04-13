// Dependencies
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const graphQlSchema = require('./models/graphql/index');
// API
const router = require('./api/index');
// Middlewares
// const isAuth = require('./middlewares/auth')
// Loaders
const { usersDataLoader, notesDataLoader } = require('./loaders/index');
// Models
const models = require('./models/schemas/index');

// Export Server
module.exports = (port, nodeEnv, graphQLEndpoint) => {
  // Setting Server
  const app = express();
  app
    .set('port', port)
    .use(helmet())
    .use(bodyParser.json())
    .use(
      bodyParser.urlencoded({
        extended: true,
      }),
    )
    /* .use(isAuth) */
    // Bind Express with GraphQL
    .use(
      graphQLEndpoint,
      graphqlHttp({
        schema: graphQlSchema,
        context: {
          models,
          loaders: {
            usersLoader: usersDataLoader(),
            notesLoader: notesDataLoader(),
          },
        },
        graphiql: nodeEnv === 'dev',
      }),
    );
  // Setting Server Routers
  router(app);
  app.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log('Running application...');
  });
};
