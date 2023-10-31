import { getTodos, close, deleleTask, addTask } from './db.js'

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

function printTodos(list) {
  list.forEach((list) => {
    console.info(`${list.id}: ${list.task}`)
  })
}

export async function deleteList(id) {
  deleleTask(id)
  const newList = await getTodos()

  printTodos(newList)
  close()
}

export async function addList(task) {
  addTask(task)
  const addedTask = await getTodos()

  printTodos(addedTask)
  close()
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
