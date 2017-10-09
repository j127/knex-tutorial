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

app.get('/todos/:id', (req, res) => {
    knex.select()
        .from('todos')
        .where('id', req.params.id)
        .then(todo => {
            res.send(todo); // also an array
        });
});

app.post('/todos', (req, res) => {
    console.log('req.body', req.body);
    knex('todos').insert({
        title: req.body.title,
        user_id: req.body.user_id
    }).then((todos) => {
        res.send(todos);
    });
});

app.put('/todos/:id', (req, res) => {
    console.log('req.body', req.body);
    knex('todos').where('id', req.params.id)
        .update({
            title: req.body.title,
            completed: req.body.completed
        })
        .then(() => {
            knex.select()
                .from('todos')
                .then(todos => {
                    res.send(todos);
                });
        });
});

app.delete('/todos/:id', (req, res) => {
    knex('todos').where('id', req.params.id)
        .del()
        .then((todos) => {
            knex.select()
                .from('todos')
                .then(todos => {
                    res.send(todos);
                });
        });
});

app.get('/users/:id/todos', (req, res) => {
    knex.from('todos')
        .innerJoin('users', 'todos.user_id', 'users.id')
        .where('todos.user_id', req.params.id)
        .then(data => {
            res.send(data);
        });
});

app.listen(port, () => {
    console.log('listening on port: ', port);
});
