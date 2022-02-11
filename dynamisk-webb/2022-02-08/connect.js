const mysql = require("mysql");

const settings = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "pokemon",
};

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
