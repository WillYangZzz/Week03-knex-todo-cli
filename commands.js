import {
  getTodos,
  close,
  deleteTask,
  addTask,
  updateTask,
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
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function deleteData(id) {
  await deleteTask(id)

  close()
}

export async function addTaskCommand(newTask) {
  await addTask(newTask)

  close()
}

export async function updateTaskCommand(id, task) {
  await updateTask(id, task)

  close()
}

export async function searchTaskCommand(search) {
  console.log(await searchTask(search))

  close()
}
