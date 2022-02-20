const express = require("express");
const app = express();
const log = require("./logging");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/index"));

app.use(express.static("public"));

app.listen(3000, () => {
    log.info("Server started at port 3000");
});
