export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    { id: 1, task: 'Do laundry' },
    { id: 2, task: 'Eat food' },
    { task: 'Vacuum house' },
  ])
}
