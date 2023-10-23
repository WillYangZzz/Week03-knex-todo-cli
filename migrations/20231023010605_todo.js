export function up(knex) {
  return knex.schema.createTable('list', function (table) {
    table.increments('id')
    table.string('work')
    table.integer('salary')
    table.string('superviser')
  })
}

export function down(knex) {
  return knex.schema.dropTable('list')
}
