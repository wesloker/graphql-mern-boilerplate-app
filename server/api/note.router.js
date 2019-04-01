// Express Router
const router = require('express').Router()
// Controllers
const UserController = require('../controllers/user.controller')
const NoteController = require('../controllers/note.controller')
// Controllers Instance
const uc = new UserController()
const nc = new NoteController()

router
  // Find one note on db
  .get('/get-note', nc.getNote)
  /* fetch('http://localhost:4000/api/get-note')
	.then(res => res.json())
	.then(response => console.log(response)) */
  // Find all notes on db
  .get('/notes', (req, res) => {
    res.send('')
  })
  // Create new note on db
  .post('/new-note', (req, res) => {
    res.send('New note')
  })
  // Update note on db
  .post('/note', (req, res) => {
    res.send('Rewrited note')
  })

module.exports = router