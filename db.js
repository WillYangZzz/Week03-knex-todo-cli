import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here

export async function deleteTask(idTask) {
  await db('todos').where('id', idTask).del()
}

export async function addTask(str) {
  await db('todos').insert({ task: str })
}

export function close() {
  db.destroy()
}
