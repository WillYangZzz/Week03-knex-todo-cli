import {
  getTodos,
  close,
  deleteList,
  add,
  update,
  searchFor,
  completed,
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

export async function deleteTodo(id) {
  deleteList(id)
  const todos = await getTodos()

  printTodos(todos)
  close()
}

export async function addTask(task) {
  try {
    await add(task)

    const todos = await getTodos()

    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function updateTask(id, task) {
  try {
    await update(id, task)

    const todos = await getTodos()

    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function searchTask(search) {
  try {
    const printSearch = await searchFor(search)

    printTodos(printSearch)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function taskComplete(id) {
  try {
    await completed(id)
    const todos = await getTodos()

    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
