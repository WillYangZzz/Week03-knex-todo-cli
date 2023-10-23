#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const multinmput = userInputs[3]
// const into = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break
  case 'delete':
    await commands.removeTask(multinmput)
    break
  case 'add':
    await commands.giveTask(multinmput)
    break
  default:
    console.log(`I don't understand that command: ${cmd}`)
}
