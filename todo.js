#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const user = userInputs[3]
const change = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'delete' + Number:
    await commands.deleteTodo(user)
    break
  case 'add':
    await commands.addTask(user)
    break
  case 'update':
    await commands.updateTask(user, change)
    break
  case 'search':
    await commands.searchTask(user)
    break
  case 'done':
    await commands.taskComplete(user)
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
