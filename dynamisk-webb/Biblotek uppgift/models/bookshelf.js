require("dotenv").config();

//const mysql = require("mysql");

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: process.env.DB_HOS,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

module.exports = require("bookshelf")(knex);
