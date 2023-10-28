import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export function close() {
  db.destroy()
}

export async function deleteTodo(id) {
  await db('todos').where('id', id).del()
}

export async function addTask(taskStr) {
  await db('todos').insert({ task: taskStr })
}
