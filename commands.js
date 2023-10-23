import { getTodos, close, deleteTask, addTask } from './db.js'

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

export async function giveTask(input) {
  try {
    await addTask(input)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function removeTask(idTask) {
  try {
    await deleteTask(idTask)
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
