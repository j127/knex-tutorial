exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', table => {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
    .createTable('todos', table => {
        table.increments();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('title').notNullable();
        table.boolean('completed').notNullable().defaultTo(false);
        // Foreign key
        table.integer('user_id').references('id').inTable('users');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTables('todos').dropTables('users');
};
