import {
  getTodos,
  deleteTodo,
  doTodo,
  undoTodo,
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

export async function deleteTask(taskId) {
  try {
    await deleteTodo(taskId)
    await list()
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function doTask(taskId) {
  try {
    await doTodo(taskId)
    await list()
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function undoTask(taskId) {
  try {
    await undoTodo(taskId)
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
    const checked = todo.isCompleted ? 'X' : ' '
    console.info(`[${checked}] ${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
