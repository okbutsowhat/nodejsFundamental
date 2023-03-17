const fs = require('fs')
const chalk = require('chalk')
const { log } = require('console')

const getNotes = () => {
  // const notes = loadNotes()
  console.log(chalk.green.bold.inverse('Your notes:'))
  // notes.forEach(note => {
  //   console.log(chalk.blue.inverse(note.title))
  // })
}

const listNotes = () => {
  const notes = loadNotes()
  console.log(chalk.green.bold.inverse('Your notes:'))
  notes.forEach(note => {
    console.log(chalk.blue.inverse(note.title))
  })
}

const readNote = (title) => {
  const notes = loadNotes()
  const note = notes.find(note => note.title === title)
  if (note) {
    console.log(chalk.green.inverse('title:'), note.title);
    console.log(chalk.green.inverse('body:'), note.body);
  } else {
    console.log(chalk.red.inverse('no note found'));
  }
}

const addNote = (title, body) => {
  const notes = loadNotes()
  const duplicateNote = notes.find((note) => note.title === title)

  debugger

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    })
    saveNotes(notes)
    console.log(chalk.green.inverse.bold('note added!'))
  } else {
    console.log(chalk.red.inverse.bold('note title taken!'))
  }
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJsON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch {
    return []
  }
}

const removeNote = (title) => {
  const notes = loadNotes()
  // const deletedNotesName = []
  const filterNotes = notes.filter(note => {
    if (note.title !== title) {
      return true
    } else {
      // deletedNotesName.push(note.title)
      console.log(chalk.blue.inverse.bold(`'${note.title}' deleted!`))
      return false
    }
  })

  if (notes.length === filterNotes.length) {
    console.log(chalk.yellow.inverse.bold(`There is no note titled ${title}`))
  } else {
    saveNotes(filterNotes)
  }
  // console.log(filterNotes);


  // const existedNotes = notes.filter((note) => {
  //   return note.title === title
  // })
  // if (existedNotes.length) {
  //   existedNotes.forEach(note => {
  //     notes.split()
  //   })
  // }
}

// node inspect .\app.js add --title="test" --body="test"
// 使用 inspect 命令进入 chrome 输入 chrome://inspect 进入调试

module.exports = {
  // getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
}