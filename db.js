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

//deleting task//

export function deleteTask(id) {
  return db('todos').where('id', id).delete()
}

// Adding a new task//

export function addTask(task) {
  return db('todos').insert({ task: task })
}

// updating a task//
export function updateTask(id, task) {
  return db('todos').where('id', id).update('task', task)
}

// search task//

export function searchTask(task) {
  return db('todos').where('task', 'like', `${task}`)
}
