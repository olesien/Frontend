// const { Model } = require("bookshelf");
const express = require("express");
const router = express.Router();

const pokemonfriends_controllers = require("../controllers/pokemonfriends_controllers");

router.get("/", pokemonfriends_controllers.read);

router.get("/:id", pokemonfriends_controllers.read);

router.post("/", pokemonfriends_controllers.create);

router.put("/:id", pokemonfriends_controllers.update);

router.delete("/:id", pokemonfriends_controllers.destroy);

router.post("/:id/addCard", pokemonfriends_controllers.addCard);

module.exports = router;
