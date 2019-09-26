exports.up = (knex) => {
  return knex.schema.createTable('topics', (table) => {
    table.increments('id').primary()
    table.string('topic')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('topics')
}
