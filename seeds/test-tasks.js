export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'dont die' },
    { id: 2, task: 'make sure we are not dead' },
  ])
}
