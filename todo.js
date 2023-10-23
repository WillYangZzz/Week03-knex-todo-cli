#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]
const work = userInputs[3]
// const change = userInputs[4]

switch (cmd) {
  case 'list':
    await commands.list()
    break

  case 'delete':
    await commands.deleteList(work)
    break

  // case 'add':
  //   await commands.addTask(change)
  //   break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}
