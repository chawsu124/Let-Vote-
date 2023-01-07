
exports.up = function(knex, Promise) {
    return knex.schema.createTable('party', function (table) {
        table.increments('id').notNullable();

        table.string('name', 255).notNullable(); 
        table.string('image').notNullable();
        table.integer('office_id').unsigned().notNullable();
        table.foreign('office_id').references('id').inTable('office');
        table.string('link').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('created_by', 50).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('updated_by', 50).notNullable();
        table.string('status',255).notNullable();
        table.text('remark');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('party')
};
