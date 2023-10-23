import {
  getTodos,
  close,
  deleteId,
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
    await deleteId(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function addTask(taskName) {
  try {
    await add(taskName)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function updateContent(id, content) {
  try {
    await updateTask(id, content)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function checkComplete(id, completeStatus) {
  try {
    await taskComplete(id, completeStatus)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
