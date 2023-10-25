#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const delAdd = userInputs[3]
const changeTask = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'find':
    await commands.find(delAdd) //Search
    break
  case 'delete':
    await commands.removeTask(delAdd) //Delete
    break
  case 'add':
    await commands.giveTask(delAdd) //Add Task
    break
  case 'update':
    await commands.updateTask(delAdd, changeTask) //Change Task
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
