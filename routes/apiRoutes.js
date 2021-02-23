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
    notes.push(req.body); 
    let update = JSON.stringify(notes, null, 2); 
    fs.writeFile('./db/db.json', update, finshed);
      function finshed() {
        console.log("Updated Notes");
      };
     res.end();
  });

  // Delete Note  

  // selected 

  // unique id 

};
