export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { task: 'dont die' },
    { task: 'make sure we are not dead' },
    { task: 'marry grace' },
  ])
}
