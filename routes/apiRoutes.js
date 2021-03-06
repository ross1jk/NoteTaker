
const notes = require('../db/db.json');
const fs = require('fs');
const { finished } = require('stream');
const shortid = require('shortid');
const { json } = require('express');

module.exports = (app) => {

  app.get('/api/notes', (req, res) => res.json(notes));

  app.post('/api/notes', (req, res) => {
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

  app.delete("/api/notes/:id", (req, res) => {
    let deleteId = req.params.id;
    notes.splice(deleteId, 1);
    let postDelete = JSON.stringify(notes, null, 2)
    // let deleteId = req.params.id;
    // for (i = 0; i < req.params.length; i++) {
    //   if (req.params[i].id === deleteId)
    //   notes.splice(deleteId, 1);
    //   return notes; 
    // }
    // let postDelete = JSON.stringify(notes, null, 2)

    fs.writeFile('./db/db.json', postDelete, (err) =>
      err ? console.log(err) : console.log("Note Successfully Deleted"));
    res.end();
  });

};