export function up(knex) {
  return knex.schema.alterTable('todos', (table) => {
    table.boolean('completed').defaultTo(false)
  })
}

export function down(knex) {
  return knex.schema.table('todos', function (table) {
    table.dropColumn('completed')
  })
}
