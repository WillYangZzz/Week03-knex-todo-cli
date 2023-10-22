export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'do the dishes' },
    { id: 2, task: 'go shopping' },
    { id: 3, task: 'do the laundary' },
  ])
}
