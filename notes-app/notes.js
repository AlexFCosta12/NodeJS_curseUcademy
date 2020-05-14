console.log ("notes.js");
//fs.writeFileSync('notes.txt','TesteCreate Notes');
const fs = require('fs');

const getNotes = function (){
        return 'Your Notes'
    }

const addNote = function (title,body){
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note){
        return note.title === title;
    });

    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes (notes);
        console.log ('New Notes Added');
    }else {
        console.log('Note Title Taken!');
    }

}

const removeNote = function(title){
    const notes = loadNotes();
    const findNotes = notes.filter(function (note){
        return note.title === title;
    })
    if (findNotes.length === 0){
        console.log ('Não foi encontrada nenhuma nota com esse title');
    }else {
        //notes.pop()
        console.log ('Remove')
        saveNotes (notes);
    }
}

const saveNotes = function (notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch(e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}