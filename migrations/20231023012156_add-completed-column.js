export function up(knex) {
  return knex.schema.alterTable('todos', function (table) {
    table.boolean('complete')
  })
}

export function down(knex) {
  return knex.schema.alterTable('todos', function (table) {
    table.dropColumn('complete')
  })
}
