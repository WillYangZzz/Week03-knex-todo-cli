/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'do homework' },
    { id: 2, task: 'shopping' },
    { id: 3, task: 'cleaning' },
  ])
}
