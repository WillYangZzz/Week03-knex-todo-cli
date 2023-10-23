import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

export function getTodo(taskId) {
  return db('todos').select('task').where('id', taskId)
}

// Your DB functions go here
export function deleteTodo(taskId) {
  return db('todos').where('id', taskId).del()
}

export function doTodo(taskId) {
  return db('todos').where('id', taskId).update({ isCompleted: true })
}

export function undoTodo(taskId) {
  return db('todos').where('id', taskId).update({ isCompleted: false })
}

export function addTodo(taskText) {
  return db('todos').insert({ task: taskText })
}

export function updateTodo(taskId, taskText) {
  return db('todos').where('id', taskId).update({ task: taskText })
}

export function searchTodos(taskText) {
  return db('todos').whereLike('task', `%${taskText}%`)
}

export function close() {
  db.destroy()
}
