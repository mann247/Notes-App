// const validator = require('validator')

// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)

// console.log(validator.isEmail('example.com'))
// console.log(validator.isURL('https://mead.io'))

//Challenge: 
//1. Install chalk
//2. Load chalk into app.js
//3. Use it to print the string "Success!" to the console in green
//4. Test your work
// Use docs to mess around with other styles. Make text bold or inversed.
const chalk = require('chalk')

const getNotes = require('./notes.js')
const msg = getNotes()
console.log(msg)

console.log(chalk.green('Success!'))