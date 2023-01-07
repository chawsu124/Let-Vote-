
exports.up = function(knex, Promise) {
    return knex.schema.createTable('office', function(table)
    {
      table.increments('id').notNullable();
      table.string('name', 255).notNullable();
      table.string('address', 255).notNullable();
  
      table.integer('village_id').unsigned().notNullable();
      table.foreign('village_id').references('id').inTable('village');

      table.integer('ward_id').unsigned().notNullable();
      table.foreign('ward_id').references('id').inTable('wards');
        
      table.string('ph_no', 255).notNullable();
      table.string('ph1').notNullable();
      table.string('ph2').notNullable();
      table.string('email', 255).notNullable();
      table.string('building_type', 255).notNullable();
      table.string('rental', 255).notNullable(); 


      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.string('created_by', 255).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.string('updated_by', 255).notNullable();
      table.string('status', 255).notNullable();
      
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('office');
};
