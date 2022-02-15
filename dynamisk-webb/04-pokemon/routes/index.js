// const { Model } = require("bookshelf");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("OK");
});

router.use("/authors", require("./authors_routes"));
router.use("/books", require("./books_routes"));
router.use("/pokemonbattles", require("./pokemonbattles_routes"));

module.exports = router;
