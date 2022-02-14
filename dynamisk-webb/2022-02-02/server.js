const express = require("express");
const path = require("path");
const fs = require("fs");
const _ = require("lodash");
const morgan = require("morgan");
//joke data
// const rawdata = fs.readFileSync("./data/oneliners.json");
// const jokes = JSON.parse(rawdata);
const jokes = require("./data/oneliners.json");

const app = express();

//middleware
// app.use((req, res, next) => {
//     //console.log(req.method, req.url);
//     console.log(`Incoming ${req.method} request for ${req.url}`);
//     next();
// });

app.use(morgan("dev"));

// set the view engine to ejs
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
    console.log("someone requested my root!");
    // console.log(req.method, req.url);
    // res.send("<h1>hi</h1>");
    //res.get('./pages/index.html');
    res.render("index", { name: "carl" });
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

// app.get("/api/nom", (req, res) => {
//     console.log("nom nom!");
//     res.send({ msg: "Cakes are nom-nom-nom." });
// });

// app.get("*", (req, res) => {
//     console.log("wrong page!");
//     res.send("Error, wrong page!");
// });

app.use((req, res, next) => {
    res.send("Sorry, we could not find that page! :(");
});

// app.use(
// express.static("public")

// );

app.listen(3000, () => {
    console.log("Server has been started at port 3000!");
});
