// const { Model } = require("bookshelf");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("OK");
});

router.use("/authors", require("./authors_routes"));
router.use("/books", require("./books_routes"));
router.use("/lending_cards", require("./lending_cards_routes"));
router.use("/loans", require("./loans_routes"));
router.use("/reservations", require("./reservations_routes"));
router.use("/shelves", require("./shelves_routes"));
router.use("/titles", require("./titles_routes"));
router.use("/users", require("./users_routes"));

module.exports = router;
