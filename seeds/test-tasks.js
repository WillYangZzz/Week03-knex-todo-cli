/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'do homework', complete: true },
    { id: 2, task: 'shopping', complete: false },
    { id: 3, task: 'cleaning', complete: true },
  ])
}
