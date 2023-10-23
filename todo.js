#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const param1 = userInputs[3]
const param2 = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'delete':
    await commands.deleteTodo(Number(param1))
    break
  case 'add':
    await commands.addTask(param1)
    break
  case 'update':
    await commands.updateTask(param1, param2)
    break
  case 'search':
    await commands.searchTask(param1)
    break
  case 'done':
    await commands.taskComplete(param1)
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
