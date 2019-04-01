const router = require('express').Router()
// Controllers
const UserController = require('../controllers/user.controller')
const NoteController = require('../controllers/note.controller')

const uc = new UserController()
const nc = new NoteController()

router
  // Find one user on db
  .get('/users', (req, res) => {
    res.send('Get all users from db')
  })
  // Find all users on db
  .get('/user', (req, res) => {
    res.send('Get only user from db')
  })

module.exports = router