#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'done':
    await commands.deleteTodo(userInputs[3])
    break
  case 'add':
    await commands.addTodo(userInputs[3])
    break
  case 'update':
    await commands.updateTodo(userInputs[3], userInputs[4])
    break
  case 'search':
    await commands.searchTodo(userInputs[3])
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
