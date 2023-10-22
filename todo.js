#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
console.table(userInputs)
const cmd = userInputs[2]
const arg1 = userInputs[3]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'done':
    await commands.completeTask(arg1)
    break
  case 'add':
    await commands.addTask(arg1)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
