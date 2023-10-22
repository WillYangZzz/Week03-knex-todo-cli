import {
  getTodos,
  deleteTodo,
  addTodo,
  updateTodo,
  searchTodos,
  close,
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

export async function completeTask(taskId) {
  try {
    await deleteTodo(taskId)
    await list()
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function addTask(taskText) {
  try {
    await addTodo(taskText)
    await list()
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function updateTask(taskId, taskText) {
  try {
    await updateTodo(taskId, taskText)
    await list()
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function searchForTask(taskText) {
  try {
    const results = await searchTodos(taskText)
    printTodos(results)
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
