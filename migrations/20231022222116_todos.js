export async function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('task')
  })
}

export async function down(knex) {
  return knex.scheme.dropTable('todos')
}
