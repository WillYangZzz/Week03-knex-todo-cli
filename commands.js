import { getTodos, close, deleteTask, addTask, updateTask } from './db.js'

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

export async function deleteTodo(id) {
  try {
    await deleteTask(id)
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

export async function updateTodo(id, task) {
  try {
    await updateTask(id, task)
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
