export function up(knex) {
  return knex.schema.alterTable('todos', (table) => {
    table.boolean('completed')
  })
}

export function down(knex) {
  return knex.schema.table('todos', function (table) {
    table.dropColumn('completed')
  })
}
