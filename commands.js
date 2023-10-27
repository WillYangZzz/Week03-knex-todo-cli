import {
  getTodos,
  close,
  deleteToDo,
  addingTask,
  updatingTask,
  searchTask,
} from './db.js'

function listCommands() {
  console.log(
    `\n---------- TODO LIST ----------\n`,

    `\nAdd a task to the list by typing 'add' followed by the task you wish to add. 
      \nComplete a task by using 'done' followed by the number of the task.
       \nSearch for a task using 'search' followed by the keyword\n`
  )
}

export async function list() {
  try {
    const todos = await getTodos()
    listCommands()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}

function printTodos(todos) {
  todos.forEach((todo) => {
    let taskDone = todo.taskCompleted
    if (taskDone == 1) {
      taskDone = 'Yes'
    } else {
      taskDone = 'No'
    }
    console.info(`${todo.id}: ${todo.task} | Completed: ${taskDone}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}

export async function deleteTask(number) {
  try {
    await deleteToDo(number)
    const todos = await getTodos()
    listCommands()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
export async function addTask(string) {
  try {
    await addingTask(string)
    const todos = await getTodos()
    listCommands()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
export async function updateTask(number, string) {
  try {
    await updatingTask(number, string)
    const todos = await getTodos()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
export async function searchingTask(string) {
  try {
    console.log(await searchTask(string))
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
