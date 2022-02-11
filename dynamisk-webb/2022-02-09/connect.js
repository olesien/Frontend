const mysql = require("mysql");

require("dotenv").config();

const settings = {
    host: process.env.DB_HOS,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

console.log(process.env); // remove this after you've confirmed it working

const con = mysql.createConnection(settings);

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("I connected look at me!");

    con.query(
        `SELECT id,name,hp FROM pokemoncards WHERE id = ${1}`,

        (err, result) => {
            if (err) throw err;
            console.log(result);

            result.forEach((r) => {
                console.log(
                    "Pokemon har namnet: " + r.name + " med hp till " + r.hp
                );
            });
        }
    );
    con.end();
});
