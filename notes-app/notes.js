var chalk = require ('chalk');
//fs.writeFileSync('notes.txt','TesteCreate Notes');
const fs = require('fs');

const addNote = (title,body) => {
    const notes = loadNotes();
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes (notes);
        console.log (chalk.bgGreen('New Notes Added'));
    }else {
        console.log(chalk.bgRed('Note Title Taken!'));
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => note.title !== title)

    if (notes.length === notesToKeep.length && notes.length !== 0){
        // Notes not remove
        console.log (chalk.bgRed('Note not removed!'));
    }else {
        // Note Remove
        console.log (chalk.bgGreen('Note Removed!'));
        saveNotes(notesToKeep);
    }
}

const listNotes = () => {
    const notes = loadNotes();
    if (notes.length !== 0){
        console.log (chalk.bgGreen('Your Notes'));
        notes.forEach((note)  => {
            console.log ("Title: "+ note.title+" Body "+note.body);
        });
    }else{
        console.log(chalk.bgRed('Your Notes is Empty !'));
    }
}

const readNote = (title) => {
    const notes = loadNotes();
    const noteRead = notes.find((note) => note.title === title)
    if (noteRead){
        console.log (chalk.inverse('Title - ' + noteRead.title));
        console.log ('Body - ' + noteRead.body);
    }else {
        console.log (chalk.bgRed('No Note Found!'));  
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}