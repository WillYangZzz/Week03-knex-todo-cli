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

export async function deleleTask(id) {
  return await db('todos').where('id', id).delete()
}

export async function addTask(task) {
  return await db('todos').insert({ task: task })
}
