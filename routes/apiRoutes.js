//API routes 
const notes = require('../db/db.json');
const fs = require('fs');
const { finished } = require('stream');
var uniqid = require('uniqid');

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notes));

  app.post('/api/notes', (req, res) => {
      // unique id 
    notes.push(req.body); 
    let update = JSON.stringify(notes, null, 2); 
    fs.writeFile('./db/db.json', update, finshed);
      function finshed() {
        console.log("Updated Notes");
      };
     res.end();
  });

  // Selected Note Display

  // Delete Note   
};
