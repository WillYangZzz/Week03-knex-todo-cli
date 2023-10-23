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

export function deleteID(id) {
  return db('todos').where('id', id).del()
}

export function addTaskByString(string) {
  return db('todos').insert({task: string})
}

export function updateTaskByString(number, string) {
  return db('todos').where({id: number}).update({task: string})
}


