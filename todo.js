#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const arg3 = userInputs[3]
const arg4 = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break

  case 'delete':
    await commands.deleteTodo(arg3)
    break

  case 'add':
    await commands.add(arg3)
    break

  case 'update':
    await commands.updateTodo(arg3, arg4)
    break

  case 'search':
    await commands.searchTodo(arg3, arg4)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
