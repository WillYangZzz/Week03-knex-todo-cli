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
    console.log(`I don't understand that command: ${cmd}. [./todo.js list] Listing all todos; [./todo.js delete 2] Delete one todo; [./todo.js add 'todo'] Add one todo; [./todo.js update 2 'new todo'] Update one todo; [./todo.js search 'search value'] Search todos; [./todo.js complet 2] Mark todo as completed`)
}
