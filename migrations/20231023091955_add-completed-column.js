export function up(knex) {
  return knex.schema.alterTable('todos', (table) => {
    table.boolean('taskCompleted')
  })
}

export function down(knex) {
  return knex.schema.table('todos', (table) => {
    table.dropColumn('taskCompleted')
  })
}
