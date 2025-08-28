const fs = require('fs')
const chalk = require('chalk')

// const getNotes = () => {
//     return 'Your notes...'
// }

const addNote = (title, body) => { //gets note saved to the data store
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note)=> note.title === title)

    // const duplicateNotes = notes.filter(function (note) {
    //     return note.title === title
    // })

    // console.log(duplicateNote)
    // console.log(title)

    debugger

    if(!duplicateNote){ //duplicateNote === und
        notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New node added'))
    } else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
    // console.log(notes)
}

//remove note
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No Note Found!'))
    }
    console.log(title)
}

//list notes
const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))

    notes.forEach((note) =>{
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note not found!'))
    }
}



//saves notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
    try{
       const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON) 
    }catch(err){
        return []
    }
}

module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}
