
exports.up = function (knex, Promise) {
    return knex.schema.createTable('voter_list', function (table) {
        table.increments('id').notNullable();
        table.string('name', 255).notNullable();
        table.integer('village_id').unsigned().notNullable();
        table.foreign('village_id').references('id').inTable('village');
        table.integer('ward_id').unsigned().notNullable();
        table.foreign('ward_id').references('id').inTable('wards');
        table.integer('election_id').unsigned().notNullable();
        table.foreign('election_id').references('id').inTable('election');
        table.integer('parliament_id').unsigned().notNullable();
        table.foreign('parliament_id').references('id').inTable('parliament');
        table.string('nrc_no', 50).notNullable();
        table.date('dob').notNullable();
        table.string('religion', 50).notNullable();
        table.string('permanent_address').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('created_by', 50).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('updated_by', 50).notNullable();
        table.string('status', 255).notNullable();

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('voter_list')
};
