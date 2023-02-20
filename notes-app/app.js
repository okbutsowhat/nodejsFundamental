// const fs = require('fs')
// fs.appendFileSync('notes.txt', 'I live in ppiladelphia')
// const add = require('./utils.js')
// const validator = require('validator')
// const name = 'liuxiatian'
// console.log(validator.isEmail('liuxiatian@foxmail.com'))

// console.log(chalk.green.inverse.bold('green message'))

// console.log(process.argv)

const chalk = require('chalk')
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')

const command = process.argv[2]

// create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    // console.log('title:' + argv.title, 'body:' + argv.body);
    notes.addNote(argv.title, argv.body)
  }
})

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    // console.log('Removing the note');
    notes.removeNote(argv.title)
  }
})

// Create list command
yargs.command({
  command: 'list',
  describe: 'List a note',
  handler: function () {
    console.log('listing out all note');
  }
})

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log('reading out all note');
  }
})

yargs.parse()
// if (command === 'add') {
//   console.log('adding note!')
// }