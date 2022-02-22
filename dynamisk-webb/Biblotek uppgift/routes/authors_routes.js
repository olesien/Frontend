// const { Model } = require("bookshelf");
const express = require("express");
const router = express.Router();
const log = require("../logging");

const authors_controllers = require("../controllers/authors_controllers");

router.get("/", authors_controllers.read);

router.get("/:id", authors_controllers.read);

router.post("/", (req, res) => {
	log.debug("invoked /: post on author");
	authors_controllers.create(req, res);
});

router.put("/:id", (req, res) => {
	res.send("PUT (" + req.params.id + ") not yet implemented");
});

router.delete("/:id", (req, res) => {
	res.send("DELETE (" + req.params.id + ") not yet implemented");
});

module.exports = router;
