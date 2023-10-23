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

export function deleteId(id) {
  return db('todos').where('id', id).del()
}

export function add(inputName) {
  return db('todos').insert({ task: inputName })
}

export function updateTask(taskId, content) {
  return db('todos').where({ id: taskId }).update({ task: content })
}
