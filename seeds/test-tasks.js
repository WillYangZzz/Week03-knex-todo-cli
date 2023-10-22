
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('todos').del()
  await knex('todos').insert([
    {id: 1, task: "Create SQL database"},
    {task: "Make seeds"},
    {task: "Complete challenge"}

  ]);
};
