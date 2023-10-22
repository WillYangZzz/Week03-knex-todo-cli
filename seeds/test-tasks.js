export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'groceries' },
    { id: 2, task: 'lawn mowing' },
    { task: 'painting' },
  ])
}
