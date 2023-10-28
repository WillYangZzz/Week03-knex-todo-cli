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
    if (todo.completed === 1) {
      console.info(`${todo.id}: ${todo.task}(completed)`)
    } else {
      console.info(`${todo.id}: ${todo.task}`)
    }
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function deleteTaskCommand(id) {
  try {
    await deleteTask(id)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function addTaskCommand(task) {
  try {
    await addTask(task)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function updateTaskCommand(id, task) {
  try {
    await updateTask(id, task)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function searchTaskCommand(searchValue) {
  try {
    const value = await searchTask(searchValue)
    value.forEach((item) => console.log(`${item.id}: ${item.task}`))
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

export async function completeTaskCommand(id) {
  try {
    await completeTask(id)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
