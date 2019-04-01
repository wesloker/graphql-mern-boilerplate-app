const userRouter = require('./user.router')
const noteRouter = require('./note.router')

module.exports = app => {
  app
    .use('/api', userRouter)
    .use('/api', noteRouter)
}