export async function up(knex) {
  return knex.schema.alterTable('todo', (table) => {
    // table.dropColumn('name')
    // table.increments('id')
    table.boolean('complete')
  })
}

export async function down(knex) {
  return knex.schema.alterTable('todo', (table) => {
    table.dropColumn('complete')
  })
}
