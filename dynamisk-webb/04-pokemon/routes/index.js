// const { Model } = require("bookshelf");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("OK");
});

router.use("/pokemoncards", require("./pokemoncards_routes"));
router.use("/pokemonfriends", require("./pokemonfriends_routes"));
router.use("/pokemonbattles", require("./pokemonbattles_routes"));

module.exports = router;
