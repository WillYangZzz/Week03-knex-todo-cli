export function up(knex) {
  return knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('tasks')
  })
}

export function down(knex) {
  return knex.schema.dropTable('todos')
}
