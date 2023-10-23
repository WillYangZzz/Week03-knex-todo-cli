import knexfile from './knexfile.js'
import knex from 'knex'

const db = knex(knexfile.development)

export function getTodos() {
  return db('todo').select()
}

// Your DB functions go here
export function close() {
  db.destroy()
}

export async function deleteList(id) {
  return await db('todo').where('id', id).delete()
}

export async function add(string) {
  return await db('todo').insert({ task: string })
}

export async function update(id, string) {
  return await db('todo').where('id', Number(id)).update({ task: string })
}

export async function searchFor(search) {
  return await db('todo').whereLike('task', `%${search}%`)
}

export async function completed(id) {
  return await db('todos').where('id', Number(id)).update('complete', true)
}
