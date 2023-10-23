#!/usr/bin/env node
import * as commands from './commands.js'

const userInputs = process.argv
const cmd = userInputs[2]

switch (cmd) {
  case 'explain':
    console.log(`After writing ./todo.js, pick one of the following commands: list - allows user to view tasks. done (task id) - allows user to mark chosen task as finished. add ('new task') - allows user to create a new task. update (id, change task) - changes that specific task. search ('partial string') - allows user to find all tasks which include that word.`)
    break

  case 'list':
    await commands.list()
    console.log(`Commands: list, done, add, update, search and explain`)
    break
  
  case 'done':
    await commands.completeTask(userInputs[3])
    console.log(`Commands: list, done, add, update, search and explain`)
    break

  case 'add':
    await commands.addTask(userInputs[3])
    console.log(`Commands: list, done, add, update, search and explain`)
    break

  case 'update':
    await commands.updateTask(userInputs[3], userInputs[4])
    console.log(`Commands: list, done, add, update, search and explain`)
    break

  case 'search':
    await commands.searchTask(userInputs[3])
    console.log(`Commands: list, done, add, update, search and explain`)
    break

  default:
    console.log(`I don't understand that command: ${cmd}`)
}