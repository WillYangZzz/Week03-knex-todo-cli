import {
  getTodos,
  close,
  deleteToDo,
  addingTask,
  updatingTask,
  searchTask,
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
    console.info(`${todo.id}: ${todo.task} Completed: ${todo.taskCompleted}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function deleteTask(number) {
  try {
    await deleteToDo(number)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
export async function addTask(string) {
  try {
    await addingTask(string)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
export async function updateTask(number, string) {
  try {
    await updatingTask(number, string)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
export async function searchingTask(string) {
  try {
    console.log(await searchTask(string))
    // const todos = await getTodos()
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
