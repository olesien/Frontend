// const { Model } = require("bookshelf");
const express = require("express");
const router = express.Router();

const users_controllers = require("../controllers/users_controllers");

router.get("/", users_controllers.read);

router.get("/:id", users_controllers.read);

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
