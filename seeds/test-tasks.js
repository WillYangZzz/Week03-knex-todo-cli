/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task: 'Buy milk' },
    { task: 'Do laundry' },
    { task: 'Prepare lunch' },
  ])
}
