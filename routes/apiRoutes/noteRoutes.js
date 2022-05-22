const router = require('express').Router();
const uniqid = require('uniqid');

const { getAllNotes, createNewNote, deleteNote} = require('../../lib/notes');

//get all notes
router.get('/notes', (req, res) => {
  res.json(JSON.parse(getAllNotes()));
});

//post new note
router.post('/notes', (req, res) => {
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid()
    }
    createNewNote(newNote);
    res.json(newNote);
});

//delete note by id
router.delete('/notes/:id', (req, res) => {    
    res.json(deleteNote(req.params.id));
});

module.exports = router;
