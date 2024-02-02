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

export function deleteTodo(id) {
  db('todos').where('id', id).del()
}

export function add(newTask) {
  return db('todos').insert({ task: newTask })
}
