// const { Model } = require("bookshelf");
const express = require("express");
const router = express.Router();

const shelves_controllers = require("../controllers/shelves_controllers");

router.get("/", shelves_controllers.read);

router.get("/:id", shelves_controllers.read);

router.post("/", (req, res) => {
	res.send("Post not yet implemented");
});

router.put("/:id", (req, res) => {
	res.send("PUT (" + req.params.id + ") not yet implemented");
});

router.delete("/:id", (req, res) => {
	res.send("DELETE (" + req.params.id + ") not yet implemented");
});

module.exports = router;
