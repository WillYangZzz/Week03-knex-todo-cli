import { c } from 'vitest/dist/reporters-5f784f42.js'
import {
  getTodos,
  close,
  deleteTodo,
  add,
  updateTask,
  taskComplete,
} from './db.js'

export async function list() {
  try {
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
export async function done(id) {
  try {
    await deleteTodo(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
