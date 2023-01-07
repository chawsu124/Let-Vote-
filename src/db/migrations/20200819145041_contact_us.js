exports.up = function(knex, Promise) {
    return knex.schema.createTable('contact_us', function (table) {
        table.increments('id').notNullable();

        table.string('name', 255).notNullable(); 
        table.string('email',255).notNullable();
        table.string('phone', 255).notNullable();
        table.text('description').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('created_by', 50).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('updated_by', 50).notNullable();
        table.string('status',255).notNullable();
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('contact_us')
};