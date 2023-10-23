export function up(knex) {
  return knex.schema.createTable('todos', function (table) {
    table.increments('id')
    table.string('task')
  })
}

export function down(knex) {
  return knex.schema.dropTable('todos')
}
