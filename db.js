import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todos').select()
}

// Your DB functions go here
export async function deleteTask(id) {
  return db('todos').where('id', id).del()
}

export async function addTask(newTask) {
  return db('todos').insert({ task: newTask })
}

export async function updateTask(id, task) {
  return db('todos')
    .where({ id: Number(id) })
    .update({ task: task })
}

export async function searchTask(search) {
  return db('todos').select().whereLike('task', `%${search}%`)
}

export async function doneTask(id) {
  return db('todos')
    .select()
    .where({ id: Number(id) })
    .update({ complete: true })
}

export async function listDoneTasks() {
  return await db('todos').select().where({ complete: true })
}

export async function listTodoTasks() {
  return await db('todos')
    .select()
    .where({ complete: null } || { complete: false })
}

export function close() {
  db.destroy()
}
