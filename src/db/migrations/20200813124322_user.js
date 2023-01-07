exports.up = function(knex, Promise) {
    return knex.schema.createTable('user',function(table){
        table.increments('id').primary().notNullable();
        table.string('username',255).notNullable();
        table.text('password').notNullable();
        table.string('role',50).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user')
};
