exports.up = function(knex, Promise) {
    return knex.schema.createTable('news', function (table) {
        table.increments('id').notNullable();
        table.text('title', 255).notNullable(); 
        table.string('image').notNullable();
        table.text('news_name').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.string('created_by', 50).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('updated_by', 50).notNullable();
        table.string('status',255).notNullable();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('news')
};