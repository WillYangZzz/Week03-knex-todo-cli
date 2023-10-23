export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('list').del()
  await knex('list').insert([
    { id: 1, work: 'cleaning', salary: 2000, superviser: 'Rwema' },
    { id: 2, work: 'cooking', salary: 4000, superviser: 'Grant' },
    { id: 3, work: 'vacuuming', salary: 5000, superviser: 'Keza' },
    { id: 4, work: 'shopping', salary: 1500, superviser: 'Yves' },
    { id: 5, work: 'hospitality', salary: 3000, superviser: 'Yvette' },
  ])
}
