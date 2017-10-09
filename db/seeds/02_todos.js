const knex = require('knex');

exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('todos').del()
        .then(() => {
            // Inserts seed entries
            return knex('todos').insert([
                { title: 'do something',
                  user_id: 3 },
                { title: 'go shopping',
                  user_id: 2 },
                { title: 'exercise',
                  user_id: 2 },
                { title: 'write a computer program',
                  user_id: 1 },
                { title: 'cook food and eat it',
                  user_id: 1 },
            ]);
        });
