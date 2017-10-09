const knex = require('knex');

// Deletes ALL existing entries
return knex('users').del()
    .then(function () {
        // Inserts seed entries
        return knex('users').insert([
            {id: 1, name: 'Alice', email: 'alice@example.com'},
            {id: 2, name: 'Bob', email: 'bob@example.com'},
            {id: 3, name: 'Charlie', email: 'charlie@example.com'},
        ]);
    });
