//npm
const chalk = require('chalk')
const yargs = require('yargs')
//user
// const getNotes = require('./notes.js') 
const getNotes = require('./notes.js') 

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
    handler: function (argv){
        //console.log('Adding a new note!', argv)
        // console.log('Title: '+ argv.title)
        // console.log('Body: '+ argv.title)
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove',
     handler: function (){
        console.log('Remove the note!')
    }
})

//read
yargs.command({
    command: 'read',
    describe: 'Reads the note',
     handler: function (){
        console.log('Reading a note!')
    }
})

//list
yargs.command({
    command: 'list',
    describe: 'lists your notes',
     handler: function (){
        console.log('Listing out all notes!')
    }
})

console.log(yargs.argv)

