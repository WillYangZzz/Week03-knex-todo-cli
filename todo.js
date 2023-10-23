#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const idDel = userInputs[3]
console.log(userInputs)

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'delete':
    await commands.deleteData(idDel)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
