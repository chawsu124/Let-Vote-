
exports.up = function(knex, Promise) {
  return knex.schema.createTable('state_division', function(table)
  {
    table.increments('id').notNullable();
    table.string('code', 50).notNullable();
    table.string('name', 255).notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('created_by', 255).notNullable();
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.string('updated_by', 255).notNullable();
    table.string('status', 255).notNullable();
    table.text('remark');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('state_division');
};
