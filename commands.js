import { getTodos, close, deleteTask, addTask, updateTask } from './db.js'

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

// Deleting todo//

export async function deleteTodo(id) {
  try {
    await deleteTask(id)
    const todos = await getTodos()
    listCommands()
    printTodos(todos)
  } catch (err) {
    logError(err)
  } finally {
    close()
  }
}
//adding a new task//
export async function addTodo(string) {
  try {
    await addTask(string)
    const todos = await getTodos()
    listCommands()
    printTodos(todos)
  } catch (error) {
    logError(error)
  } finally {
    close()
  }
}
//Updating a task//

export async function updateTodo(id, task) {
  try {
    await updateTask(id, task)
    const todos = await getTodos()
    listCommands()
    printTodos(todos)
  } catch (error) {
    logError(error)
  } finally {
    close()
  }
}

//printing todo//

function printTodos(todos) {
  todos.forEach((todo) => {
    console.info(`${todo.id}: ${todo.task}`)
  })
}

function logError(err) {
  console.error('Uh oh!', err.message)
}
