//API routes 
const notes = require('../db/db.json');
const fs = require('fs');
const { finished } = require('stream');
// const util = require('util');

module.exports = (app) => {

  // reads the db.json file and returns all saved notes as JSON.
  app.get('/api/notes', (req, res) => res.json(notes));

  // POST /api/notes should receive a new note to save on the request body, 
  // add it to the db.json file, and then return the new note to the client. 
  app.post('/api/notes', (req, res) => {
    let title = req.body.title;
    let noteInfo = req.body.text;
    let newNote = { "title": title, "text": noteInfo };

    // You'll need to find a way to give each note a unique id when it's saved 
    // (look into npm packages that could do this for you).
    // add to file 
    fs.readFileSync('./db/db.json', function (err, data) {
      let currentNotes = JSON.parse(data);
      notes.push(newNote);
      let update = JSON.stringify(currentNotes);

      fs.writeFile('./db/db.json', update, finshed);
      function finshed() {
        console.log("Updated Notes");
      };
    });
    // return new note to the client 
    res.json(notes);
  });

  // Delete Note  

};
