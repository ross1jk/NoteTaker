const express = require('express');
const fs = require('fs')
const app = express();
const PORT = process.env.PORT || 3000;
const notes = require('./db/db.json')
// sets up express app to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// open the db.json file to read it using fs 
// fs should let me be able to modfiy it as well 

// The following HTML routes should be created:
// GET /notes should return the notes.html file.
// GET * should return the index.html file.

//API routes 
// GET /api/notes 
// read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => res.json(notes)); 

// POST /api/notes should receive a new note to save on the request body, 
//add it to the db.json file, and 
//then return the new note to the client. 
//You'll need to find a way to give each note a unique id when it's saved 
//(look into npm packages that could do this for you).

app.post('api/notes', (req, res) => {
  const newNote = req.body; 
  notes.push(newNote);
  res.json(db);
}); 

// Starting my server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`)
});