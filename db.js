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

export function deleteTask(id) {
  return db('todos').where('id', id).del()
}

export function addTask(task) {
  return db('todos').insert({task: task})
}

export function updateTask(id, task) {
  return db('todos').where('id', id).update({task: task})
}

export function searchTask(searchValue) {
  return db('todos').select().whereLike('task', `%${searchValue}%`)
}

export function completeTask(id) {
  return db('todos').where('id', id).update('completed', true)
}
