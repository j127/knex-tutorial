# Knex JS Tutorial

I followed this tutorial on YouTube: https://www.youtube.com/playlist?list=PL7sCSgsRZ-smPRSrim4bX5TQfRue1jKfw

* `npm i`
* 

## Migrations

    $ knex migrate:make create_users_and_todos_tables

    $ knex migrate:latest

    $ knex migrate:rollback

## Seeds

This creates the seed files:

    # WARNING: THIS WILL OVERWRITE THOSE FILES!
    $ knex seed:make 01_users
    $ knex seed:make 02_todos

This runs the seed files:

    $ knex seed:run

