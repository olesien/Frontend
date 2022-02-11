const express = require("express");
const app = express();

const multer = require("multer");

app.use(express.static("static"));

// const urlenconded = express.urlencoded({ extended: false });

// const jsonencoder = express.json();

const storageObject = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, (Math.random() + 1).toString(36).substring(7) + ".png");
    },
});

const multipartDataEncoder = multer({ storage: storageObject });

//app.use(urlenconded);

app.post("/upload", multipartDataEncoder.single("myFile"), (req, res) => {
    console.log(req.file);
    res.send(req.file);
});

app.listen(3000, () => {
    console.log("Server started at 3000");
});
