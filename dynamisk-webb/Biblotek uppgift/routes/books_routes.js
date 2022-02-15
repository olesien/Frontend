// const { Model } = require("bookshelf");
const express = require("express");
const router = express.Router();

const books_controllers = require("../controllers/books_controllers");

router.get("/", books_controllers.read);

router.get("/:id", books_controllers.read);

router.post("/", books_controllers.create);

router.put("/:id", books_controllers.update);

router.delete("/:id", books_controllers.del);

module.exports = router;
