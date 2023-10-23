import { getTodos, close, deleteID, addTaskByString, updateTaskByString, searchTaskByString } from './db.js'

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

export async function deleteTask(id) {
  try {
    await deleteID(id)
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