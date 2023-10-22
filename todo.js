#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const del = userInputs[3]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'delete':
    await commands.removeTask(del)
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
