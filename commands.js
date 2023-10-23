import { getTodos, close, finishByID, addTaskByString, updateTaskByString, searchTaskByString } from './db.js'

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
    const finished = done(todo.finished)
    console.info(`${todo.id}: ${todo.task}.  Finished: ${finished}.`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

function done (boolean) {
  if (boolean == 1) return 'true' 
  else return 'false'
}

export async function completeTask(id) {
  try {
    await finishByID(id)
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
    await addTaskByString(string)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function updateTask(id, string) {
  try {
    await updateTaskByString(id, string)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function searchTask(string) {
  try {
   const search = await searchTaskByString(string)
   console.log(search) 
   // const todos = await getTodos()
    // printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}