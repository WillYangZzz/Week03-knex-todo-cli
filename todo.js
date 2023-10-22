#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const arg1 = userInputs[3]
const arg2 = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'delete':
    await commands.deleteTask(arg1)
    break
  case 'done':
    await commands.doTask(arg1)
    break
  case 'undo':
    await commands.undoTask(arg1)
    break
  case 'add':
    await commands.addTask(arg1)
    break
  case 'update':
    await commands.updateTask(arg1, arg2)
    break
  case 'search':
    await commands.searchForTask(arg1)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
