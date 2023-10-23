import { getTodos, close, deleteTask, addTask, updateTask, searchTask, completeTask} from './db.js'

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

export async function deleteTaskCommand(id) {
  try {
    await deleteTask(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function addTaskCommand(task) {
  try {
    await addTask(task)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function updateTaskCommand(id, task) {
  try {
    await updateTask(id, task)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function searchTaskCommand(searchValue) {
  try {
    console.log(await searchTask(searchValue))
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function completeTaskCommand(id) {
  try {
    await completeTask(id)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
