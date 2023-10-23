#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const secondPara = userInputs[3]
const thirdPara = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break

  case 'delete':
    await commands.deleteTaskCommand(secondPara)
    break

  case 'add':
    await commands.addTaskCommand(secondPara)
    break

  case 'update':
    await commands.updateTaskCommand(secondPara, thirdPara)
    break

  case 'search':
    await commands.searchTaskCommand(secondPara)
    break

  case 'complete':
    await commands.completeTaskCommand(secondPara)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
