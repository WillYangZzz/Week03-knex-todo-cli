import { getTodos, close, deleleTask } from './db.js'

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
    console.info(`${list.id}: ${list.work}`)
  })
}

export async function deleteList(id) {
  deleleTask(id)
  const newList = await getTodos()

  printTodos(newList)
  close()
}

// export async function addTask() {
//   try {
//     const todos = await getTodos()
//     printTodos(todos)
//   } catch (err) {
//     logError(err)
//   } finally {
//     close()
//   }
// }
function logError(err) {
  console.error('Uh oh!', err.message)
}
