require("dotenv").config();

const mysql = require("mysql");

const knex = require("knex");

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOS,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
});

// connection
//     .select()
//     .table("PokemonCards")
//     .then((result) => {
//         console.log(result);
//         result.forEach((r) =>
//             console.log("Pokemon har namnet " + r.name + " med hp till " + r.hp)
//         );
//     });

// connection
//     .select("id", "name", "hp")
//     .whereIn("id", [2, 4, 6])
//     .table("PokemonCards")
//     .then((result) => {
//         console.log(result);
//         result.forEach((r) =>
//             console.log("Pokemon har namnet " + r.name + " med hp till " + r.hp)
//         );
//     });

connection("PokemonCards")
    .where("id", 1)
    .select()
    .then((result) => {
        console.log(result);
    });

connection("PokemonCards")
    .insert({ name: "Nodemon", hp: 163 })
    .finally((result) => {
        console.log(result);
    });
