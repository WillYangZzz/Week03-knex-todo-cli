#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const task = userInputs[3]

// const change = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break

  case 'done':
    await commands.deleteList(task)
    break

  case 'add':
    await commands.addList(task)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
