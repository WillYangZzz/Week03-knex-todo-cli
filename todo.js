#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const arg3 = userInputs[3]

switch (cmd) {
  case 'list':
    await commands.list()
    break

  case 'delete':
    await commands.deleteTask(arg3)
    break

  case 'add':
    await commands.add(arg3)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
