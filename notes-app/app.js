//const getNotes = require ('./utils.js')
//const sum = add(4,-2);

//const validator = require('validator');

var chalk = require ('chalk');
const yargs = require('yargs');
const notes = require ('./notes.js')

//Customize yargs version
yargs.version('1.1.0');

// Create add Comand 
yargs.command({
    command: 'add',
    describe: 'Add new Note',
    builder :{
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.addNote(argv.title,argv.body);
    }
})

//Create Remove command
yargs.command({
    command: 'remove',
    describe: 'Remove Note',
    builder:{
        title: {
            describe: 'Notes Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv){
        notes.removeNote(argv.title)
    }
})

//Create List Command
yargs.command({
    command: 'list',
    describe: 'List Notes',
    handler: function (){
        console.log ('List Note');
    }
})

//Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read Notes',
    handler: function (){
        console.log ('Read Note');
    }
})
//add, remove, read, list

yargs.parse();
//console.log(yargs.argv);
