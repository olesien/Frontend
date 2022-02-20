const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("combined"));

app.use("/", require("./routes/index"));

app.listen(3000, () => {
    console.log("server started at port 3000");
});
