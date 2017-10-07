exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('todos').del()
        .then(() => {
            // Inserts seed entries
            return knex('todos').insert([
                { id: 1,
                  title: 'do something',
                  user_id: 3 },
                { id: 2,
                  title: 'go shopping',
                  user_id: 2 },
                { id: 3,
                  title: 'exercise',
                  user_id: 2 },
                { id: 4,
                  title: 'write a computer program',
                  user_id: 1 },
                { id: 5,
                  title: 'cook food and eat it',
                  user_id: 1 },
            ]);
        });
};
