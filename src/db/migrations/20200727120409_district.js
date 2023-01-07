
exports.up = function(knex, Promise) {
    return knex.schema.createTable('district', function (table) {
        table.increments('id').notNullable();
        table.integer('state_division_id').unsigned().notNullable();
        table.foreign('state_division_id').references('id').inTable('state_division');
        table.string('code', 50).notNullable();
        table.string('name', 255).notNullable(); 
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('created_by', 50).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('updated_by', 50).notNullable();
        table.string('status',255).notNullable();
        table.text('remark');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('district')
};
