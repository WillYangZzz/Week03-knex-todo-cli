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

export function deleteToDo(number) {
  return db('todos').where({ id: number }).update('taskCompleted', true)
}
export function addingTask(string) {
  return db('todos').insert({ task: string })
}

export function updatingTask(number, string) {
  return db('todos').where({ id: number }).update({ task: string })
}
export function searchTask(string) {
  return db('todos').where('task', 'like', `%${string}%`)
}
