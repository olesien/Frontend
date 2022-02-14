const express = require("express");
const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const morgan = require("morgan");
const mysql = require("mysql");
require("dotenv").config();
//joke data
// const rawdata = fs.readFileSync("./data/oneliners.json");
// const jokes = JSON.parse(rawdata);
const jokes = require("./data/oneliners.json");

const users = require("./data/users.json");
const { isDeepStrictEqual } = require("util");

const app = express();

const con = mysql.createConnection({
    host: process.env.DB_HOS,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

app.use(morgan("dev"));

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.static("public"));

con.connect((err) => {
    if (err) {
        throw err;
    }

    console.log("I connected look at me!");
});

const addUser = async (firstName, lastName, age) => {
    con.connect((err) => {
        if (err) {
            throw err;
        }

        let sql = "INSERT INTO users SET ?";
        let data = {
            firstname: firstName,
            lastname: lastName,
            age: age,
        };
        con.query(sql, data, (err, res) => {
            if (err) throw err;
            console.log(res);
            return res;
        });

        console.log("I connected look at me!");
    });
};

// const getTitles = async () => {
//     let sql = "SELECT * from titles";
//     con.query(sql, (err, res) => {
//         if (err) throw err;
//         console.log(res);
//         return res;
//     });
// };

app.get("/", (req, res) => {
    console.log("someone requested my root!");

    let sql = "SELECT * from titles";
    con.query(sql, (err, resp) => {
        if (err) throw err;
        console.log(resp);
        res.render("index", { titles: resp });
    });

    //res.sendFile(path.join(__dirname, "/pages/index.html"));
});

app.get("/login", (req, res) => {
    console.log("someone requested my root!");

    res.render("login");

    //res.sendFile(path.join(__dirname, "/pages/index.html"));
});

app.get("/users/:userId", (req, res) => {
    const userId = req.params.userId;
    console.log("someone requested my root!");
    // console.log(req.method, req.url);
    // res.send("<h1>hi</h1>");
    //res.get('./pages/index.html');
    console.log(users[Number(userId)]);
    if (Number(userId) >= users.length || Number(userId) < 0) {
        res.send("Error: out of range");
    }
    res.render("users", { userId, user: users[Number(userId)] });
    //res.sendFile(path.join(__dirname, "/pages/index.html"));
});

app.get("/jokes", (req, res) => {
    //1: read JSON from data/onliners.json
    //2. Get random item fro marray
    //3. Respond with item

    console.log("someone requested my root!");
    // console.log(req.method, req.url);
    // res.send("<h1>hi</h1>");
    //res.get('./pages/index.html');
    const i = _.random(0, jokes.length - 1);
    // res.send(
    //     jokes.sort(function () {
    //         return 0.5 - Math.random();
    //     })[0]
    // );
    //res.send(jokes[i]);
    res.render("jokes", { joke: jokes[i] });
});

app.use((req, res, next) => {
    res.send("Sorry, we could not find that page! :(");
});

// app.use(
// express.static("public")

// );

app.listen(3000, () => {
    console.log("Server has been started at port 3000!");
});
