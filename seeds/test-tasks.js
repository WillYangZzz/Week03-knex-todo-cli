export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, task: 'rowValue1', completed: false},
    {id: 2, task: 'rowValue2', completed: false},
    {id: 3, task: 'rowValue3', completed: false},
  ]);
}
