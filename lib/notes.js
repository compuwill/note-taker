const fs = require('fs');
const path = require('path');

function getAllNotes() {
    return fs.readFileSync('db/db.json');
}

function createNewNote(newNote) {
    const db = JSON.parse(fs.readFileSync('db/db.json'))
    db.push(newNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
}

function deleteNote(noteId) {
    const db = JSON.parse(fs.readFileSync('db/db.json'))
    const filteredNotes = db.filter(note => note.id !== noteId)
    fs.writeFileSync('db/db.json', JSON.stringify(filteredNotes));
    return filteredNotes;
}

module.exports = {
    getAllNotes,
    createNewNote,
    deleteNote
};
