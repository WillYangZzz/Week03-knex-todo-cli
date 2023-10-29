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

export async function deleteTask(id) {
  await db('todos').where('id', id).del()
}

export async function addTask(taskStr) {
  await db('todos').insert({ task: taskStr })
}

export async function updateTask(id, taskStr) {
  await db('todos').update({ task: taskStr }).where('id', id)
}

export async function searchTask(taskWord) {
  // tried whereILike but not sure why it does not work, whereLike works case-insenstively which contradicts knex docs??
  return await db('todos').whereLike('task', `%${taskWord}%`)
}
