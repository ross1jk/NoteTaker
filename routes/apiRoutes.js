//API routes 
const notes = require('../db/db.json');
const fs = require('fs');
const util = require('util');
// const router = reauire('express').Router();
// const store = require('../db/store')

module.exports = (app) => {
// GET /api/notes 
// read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => res.json(notes)); 

// POST /api/notes should receive a new note to save on the request body, 
// add it to the db.json file, and 
// then return the new note to the client. 
// You'll need to find a way to give each note a unique id when it's saved 
// (look into npm packages that could do this for you).

app.post('api/notes', (req, res) => {
  const savedNotes = JSON.parse(notes);
  const newNote = req.body; 
  savedNotes.push(newNote); 
  fs.appendFile('../db/db.json', JSON.stringify(savedNotes)); 
  console.log("you did something jac");
  res.json(notes);
}); 
}; 
