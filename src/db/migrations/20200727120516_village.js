
exports.up = function(knex, Promise) {
    return knex.schema.createTable('village', function (table) {
        table.increments('id').notNullable();
        table.integer('village_tract_id').unsigned().notNullable();
        table.foreign('village_tract_id').references('id').inTable('village_tract');
        table.string('code', 50).notNullable();
        table.string('name', 255).notNullable(); 
        table.string('latitude',50).notNullable();
        table.string('longitude',50).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('created_by', 50).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('updated_by', 50).notNullable();
        table.string('status', 255).notNullable();
        table.text('remark');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('village')
};
