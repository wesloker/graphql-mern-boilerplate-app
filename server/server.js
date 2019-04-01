// Express
const express = require('express')
// GraphQL
const graphqlHttp = require('express-graphql')
const graphQlSchema = require('./graphql/index')
// API
const router = require('./api/index')
// Middlewares
// const isAuth = require('./middlewares/auth')
// Dependencies
const bodyParser = require('body-parser')
// Exporting Server
module.exports = (port, nodeEnv) => {
  // Setting Server
  const app = express()
  app
    .set('port', port)
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
      extended: true
    }))
    //.use(isAuth)
    .use(
      '/graphql',
      graphqlHttp({
        schema: graphQlSchema,
        graphiql: nodeEnv === 'dev' ? true : false
      })
    )
  // Setting Server Routers
  router(app)
  // Starting Server
  app.listen(app.get('port'), () => {
    console.log('Running application...')
  })
}