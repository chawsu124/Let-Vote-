
exports.up = function (knex, Promise) {
    return knex.schema.createTable('constituency', function (table) {
        table.increments('id').notNullable();
        table.integer('town_id').unsigned().notNullable();
        table.foreign('town_id').references('id').inTable('town');
        table.integer('election_id').unsigned().notNullable();
        table.foreign('election_id').references('id').inTable('election');
        table.string('code1', 50).notNullable();
        table.string('code2', 50).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('created_by', 50).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('updated_by', 50).notNullable();
        table.string('status', 255).notNullable();
        table.text('remark');
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('constituency')
};
