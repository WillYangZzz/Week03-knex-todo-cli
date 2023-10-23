// Function imports from 'db.js'
import {
  getTodos,
  close,
  deleteTask,
  addTask,
  updateCurrent,
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

// This function is part of the system that can update tasks by id
// This function is called from 'todo.js' with two inputs
// This function then calls updateCurrent inside 'db.js'

export async function updateTask(delAdd, changeTask) {
  try {
    await updateCurrent(delAdd, changeTask)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

//-----------------------------------------------------------

//

//-----------------------------------------------------------

// This function is part of the system to input tasks to the dp
// This function is called inside 'todo.js' by user input
// This function then calls the 'addTask' function inside 'db.js'

export async function giveTask(input) {
  try {
    await addTask(input)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
//-----------------------------------------------------------

// This function is part of the system to delete a task from the dp
// This function is called from inside 'todo.js' by user input
// This function is the calls the function 'deleteTask' inside 'db.js'

export async function removeTask(idTask) {
  try {
    await deleteTask(idTask)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
//-----------------------------------------------------------

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
