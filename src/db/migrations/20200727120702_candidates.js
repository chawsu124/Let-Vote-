
exports.up = function(knex, Promise) {
    return knex.schema.createTable('candidates', function(table)
    {
      table.increments('id').notNullable();
      table.string('name', 255).notNullable();
  
      table.integer('party_id').unsigned().notNullable();
      table.foreign('party_id').references('id').inTable('party');

      table.integer('constituency_id').unsigned().notNullable();
      table.foreign('constituency_id').references('id').inTable('constituency');

      table.integer('parliament_id').unsigned().notNullable();
      table.foreign('parliament_id').references('id').inTable('parliament');

      table.string('image',50).notNullable();

      table.integer('election_id').unsigned().notNullable();
      table.foreign('election_id').references('id').inTable('election');

      table.datetime('dob').notNullable();
  
      table.string('fathername', 255).notNullable();
      table.string('religion',50).notNullable();
      table.string('nrc_no',50).notNullable();
      table.string('education',50).notNullable();
      table.integer('occupation').notNullable();
      table.text('permanent_address');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.string('created_by', 255).notNullable();
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.string('updated_by', 255).notNullable();
      table.string('status', 255).notNullable();
      table.text('remark');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('candidates');
};
