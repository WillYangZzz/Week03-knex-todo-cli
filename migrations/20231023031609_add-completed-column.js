export async function up(knex) {
  return knex.schema.alterTable('todos', (table) => {
    table.string('complete')
  })
}

export async function down(knex) {
  return knex.schema.alterTable('todos', (table) => {
    table.dropColumn('complete')
  })
}
