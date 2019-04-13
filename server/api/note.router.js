// Express Router
const router = require('express').Router();
// Controllers
const nc = require('../controllers/note.controller');
// Set And Export Router
module.exports = router
  // Find One Note On Database
  .post('/note', nc.getNote)
  // Find All Notes On Database
  .post('/notes', nc.getNotes)
  // Create New Note On Database
  .post('/note/new', nc.newNote)
  // Update One Note On Database
  .post('/note/update', nc.updateNote);
