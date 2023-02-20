const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
  return ''
}

const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNote = notes.filter((note) => {
    return note.title === title
  })

  if (duplicateNote.length === 0) {
    notes.push({
      title,
      body
    })
    saveNotes(notes)
    console.log(chalk.green.inverse.bold('note added!'))
  } else {
    console.log(chalk.red.inverse.bold('note title taken!'))
  }
}

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch {
    return []
  }
}

const removeNote = function (title) {
  const notes = loadNotes()
  notes.forEach((note, index) => {
    if (note.title === title) {
      console.log(chalk.blue.inverse.bold(`removed note: ${title}`))
      notes.split(index, 1)
    }
  })
  // const existedNotes = notes.filter((note) => {
  //   return note.title === title
  // })
  // if (existedNotes.length) {
  //   existedNotes.forEach(note => {
  //     notes.split()
  //   })
  // }
}

module.exports = {
  getNotes,
  addNote,
  removeNote
}