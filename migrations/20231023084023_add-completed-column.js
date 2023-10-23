export function up(knex) {
  return knex.schema.alterTable('todos', function(table) {
    table.boolean('completed')
  })
}

export function down(knex) {
  return knex.schema.alterTable('todos', function(table) {
    table.dropColumn('completed')
  })
}
