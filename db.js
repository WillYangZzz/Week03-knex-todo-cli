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
  return db('todos').where('id', id).del()
}

export function addTask(newTask) {
  return db('todos').insert({ task: newTask })
}

export function updateTask(taskId, content) {
  return db('todos').where('id', taskId).update({ task: content })
}

export function taskComplete(taskId, completeStatus) {
  return db('todos').where({ id: taskId }).update({ complete: completeStatus })
}
