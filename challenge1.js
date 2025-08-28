const fs = require('fs') //fileSystem

fs.writeFileSync('notes.txt', 'My name is N.');

//Challenge: Append a message to notes.txt
//
//1. Use appendFileSync to append the file
//2. Run the Script
//3. Check work by opening the file and viewing the appended text

fs.appendFileSync('notes.txt', ' I live in Charlotte')

// const name = require('./utils.js')
// // const name = 'Nia';

// console.log(name);