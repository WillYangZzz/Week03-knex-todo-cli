import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export async function deleteTask(id) {
  return db('todos').where('id', id).del()
}

export function close() {
  db.destroy()
}
