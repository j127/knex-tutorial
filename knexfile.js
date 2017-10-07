module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: '127.0.0.1',
            user: process.env.TODO_DB_USER,
            password: process.env.TODO_DB_PW,
            database: 'todos_test'
        },
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds',
        },
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        migrations: {
            directory: __dirname + '/db/migrations',
        },
        seeds: {
            directory: __dirname + '/db/seeds/production',
        },
    },
};
