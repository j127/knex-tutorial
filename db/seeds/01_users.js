
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                {id: 1, name: 'User 1', email: '1@example.com'},
                {id: 2, name: 'User 2', email: '2@example.com'},
                {id: 3, name: 'User 3', email: '3@example.com'},
            ]);
        });
};
