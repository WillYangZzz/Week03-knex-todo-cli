import { getTodos, close, deleteTodo, addTask } from './db.js'

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

export async function deleteTask(id) {
  try {
    await deleteTodo(id)
  } finally {
    close()
  }
}

export async function add(task) {
  try {
    await addTask(task)
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
