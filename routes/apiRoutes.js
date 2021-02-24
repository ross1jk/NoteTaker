//API routes 
const notes = require('../db/db.json');
const fs = require('fs');
const { finished } = require('stream');
const shortid = require('shortid');

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notes));

  app.post('/api/notes', (req, res) => {
    // unique id
    req.id = shortid.generate();
    const newNote = { 
      title: req.body.title, 
      text: req.body.text,
      id: req.id
    };
    notes.push(newNote);
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



