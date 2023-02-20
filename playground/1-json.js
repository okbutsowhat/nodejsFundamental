const fs = require('fs')
// const book = {
//   title: 'Ego is the empty',
//   author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)

// fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

console.log(data)
const myInfo = data
myInfo.name = 'liuxiatian'
myInfo.age = '24'

const myInfoJSON = JSON.stringify(myInfo)
fs.writeFileSync('1-json.json', myInfoJSON)