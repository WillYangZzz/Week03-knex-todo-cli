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
  case 'delete':
    await commands.removeTask(delAdd)
    break
  case 'add':
    await commands.giveTask(delAdd)
    break
  case 'update':
    await commands.updateTask(delAdd, changeTask)
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
