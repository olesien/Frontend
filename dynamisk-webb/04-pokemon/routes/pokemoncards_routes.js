// const { Model } = require("bookshelf");
const express = require("express");
const router = express.Router();

const pokemoncards_controllers = require("../controllers/pokemoncards_controllers");

router.get("/", pokemoncards_controllers.read);

router.get("/:id", pokemoncards_controllers.read);

router.post("/", pokemoncards_controllers.create);

router.put("/:id", pokemoncards_controllers.update);

router.delete("/:id", pokemoncards_controllers.del);

module.exports = router;
