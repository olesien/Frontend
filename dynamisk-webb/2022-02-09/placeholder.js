//console.log(process.env); // remove this after you've confirmed it working^
const mysql = require("mysql");

require("dotenv").config();

const con = mysql.createConnection({
    host: process.env.DB_HOS,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("I connected look at me!");

    // con.query(
    //     `SELECT id,name,hp FROM pokemoncards WHERE id = ${1}`,

    //     (err, result) => {
    //         if (err) throw err;
    //         console.log(result);

    //         result.forEach((r) => {
    //             console.log(
    //                 "Pokemon har namnet: " + r.name + " med hp till " + r.hp
    //             );
    //         });
    //     }
    // );
    //con.query(sql, placeholder_data, callback);

    // let sql = "INSERT INTO pokemoncards (name, hp) VALUES (?, ?)";
    // let data = ["Talonflame", 130];
    // con.query(sql, data, (err, res) => {
    //     if (err) throw err;
    //     console.log(res);
    // });
    let sql = "INSERT INTO pokemoncards SET ?";
    let data = {
        name: "Gourgeist",
        hp: 100,
    };
    con.query(sql, data, (err, res) => {
        if (err) throw err;
        console.log(res);
    });

    con.end();
});

// const readline = require("readline");
// const rl = (readline = createInterace({
//     input: process.stdin,
//     output: process.stdout,
// }));

// let name, email;
// rl.question("What's your name?", (answer) => {
//     name = answer;
//     rl.question("What's your email?", (answer) => {
//         email = answer;
//     });
// });
