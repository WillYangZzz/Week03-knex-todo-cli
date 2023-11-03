import {
  getTodos,
  close,
  deleteTask,
  addTask,
  updateTask,
  searchTask,
  doneTask,
  listDoneTasks,
  listTodoTasks,
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
    console.log(`${todo.id}: ${todo.task}: ${todo.complete}`)
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

export async function doneTaskCommand(id) {
  await doneTask(id)
  await list()
  close()
}

export async function listDoneTasksCommand() {
  console.log(await listDoneTasks())
  close()
}

export async function listTodoTasksCommand() {
  console.log(await listTodoTasks())
  close()
}
