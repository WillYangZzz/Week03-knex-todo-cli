export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'grocery' },
    { id: 2, task: 'laundry' },
    { id: 3, task: 'dishes' },
  ])
}
