import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export function deleteTodo(taskId) {
  return db('todos').where('id', taskId).del()
}

export function addTodo(taskText) {
  return db('todos').insert({ task: taskText })
}

export function updateTodo(taskId, taskText) {
  return db('todos').where('id', taskId).update({ task: taskText })
}

export function close() {
  db.destroy()
}
