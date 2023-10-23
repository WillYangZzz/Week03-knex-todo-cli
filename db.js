import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('list').select()
}

// Your DB functions go here
export function close() {
  db.destroy()
}

export async function deleleTask(id) {
  return await db('list').where('id', id).delete()
}

// export async function addTask(id) {
//   return await db('todo').where('id', id).delete()
// }
