export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'row a boat' },
    { id: 2, task: 'eat lunch' },
    { id: 3, task: 'look at bird' },
    { task: 'look at bird1' },
    { task: 'look at bird2' },
    { task: 'look at bird3' },
  ])
}
