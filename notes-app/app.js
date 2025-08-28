//npm
const chalk = require('chalk')
const yargs = require('yargs')
//user
const notes = require('./notes.js') 

// console.log(process.argv)

//customize yargs version
yargs.version('1.1.0')

//add, remove, read, list
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title', 
            demandOption: true,
            type:'string'
        },
        body: {
            describe:'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body) //calls new method
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
     handler: function (argv){
        notes.removeNote(argv.title)
        console.log('Remove the note!')
    }
})

//list
yargs.command({
    command: 'list',
    describe: 'lists your notes',
     handler(){
        notes.listNotes()
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'Reads the note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
     handler(argv){
        notes.readNote(argv.title)
    }
})

console.log(yargs.argv)

