import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

// Displaying tasks stored in the db
export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here

// For adding new task
export async function addTask(str) {
  await db('todos').insert({ task: str })
}

export async function searchTask() {}

// For updating a current task
export async function updateCurrent(id, newTask) {
  await db('todos').where('id', id).update({ task: newTask })
}

// For deleting a task
export async function deleteTask(idTask) {
  await db('todos').where('id', idTask).del()
}

export function close() {
  db.destroy()
}
