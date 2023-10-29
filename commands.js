import {
  getAllTodos,
  getTodos,
  close,
  deleteTask,
  addTask,
  updateTask,
  searchTask,
  completeTask,
} from './db.js'

export async function listAll() {
  try {
    const todos = await getAllTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function list() {
  try {
    const todos = await getTodos()
    printTodos(todos)
  } finally {
    close()
  }
}

export async function deleteTodo(id) {
  try {
    await deleteTask(id)
  } finally {
    close()
  }
}

export async function add(newTask) {
  try {
    await addTask(newTask)
  } finally {
    close()
  }
}

export async function updateTodo(id, newTask) {
  try {
    await updateTask(id, newTask)
  } finally {
    close()
  }
}

export async function searchTodo(taskWord) {
  try {
    const todos = await searchTask(taskWord)
    printTodos(todos)
  } finally {
    close()
  }
}

export async function completeTodo(id) {
  try {
    await completeTask(id)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    const isComplete = todo.completed === 1 ? true : false
    console.info(`${todo.id}: ${todo.task}, COMPLETED: ${isComplete}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
