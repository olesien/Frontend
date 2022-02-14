const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/bodyParser", (req, res) => {
    console.log("GET /bodyParser");
    console.log(req.query);
    console.log("Name = " + req.query.name);
    console.log("Profile = " + req.query.profile);
    res.send("OK");
});

const bodyParser = require("body-parser");

const urlEncondedBodyParser = bodyParser.urlencoded({ extended: false });

app.post("/bodyParser", urlEncondedBodyParser, (req, res) => {
    console.log("POST /bodyParser");
    console.log(req.query);
    console.log(req.body);
    // console.log("Name = " + req.query.name);
    // console.log("Profile = " + req.query.profile);
    res.send("OK");
});

// app.post("/bodyParserJson", express.json(), (req, res) => {
//     console.log("POST /bodyParser");
//     console.log(req.query);
//     console.log(req.body);
//     // console.log("Name = " + req.query.name);
//     // console.log("Profile = " + req.query.profile);
//     res.send("OK");
// });

app.listen(3000, () => {
    console.log("server is up! Host: http://localhost:3000");
});
