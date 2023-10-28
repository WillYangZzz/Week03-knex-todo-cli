export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, task: 'Pet cat', completed: false},
    {id: 2, task: 'Meeting', completed: false},
    {id: 3, task: 'Cooking', completed: false},
  ]);
}
