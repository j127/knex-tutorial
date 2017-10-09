const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const knex = require('./db/knex');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/everything', (req, res) => {
    knex.raw('SELECT * FROM todos').then((todos) => {
        res.send(todos); // notice the `rows` array
    });
});

app.get('/todos', (req, res) => {
    knex.select().from('todos').then((todos) => {
        res.send(todos);
    });
});

app.get('/todos/1', (req, res) => {
    knex.select().from('todos').where('id', 1)
    .then(todo => {
        res.send(todo); // also an array
    });
});

app.listen(port, () => {
    console.log('listening on port: ', port);
});
