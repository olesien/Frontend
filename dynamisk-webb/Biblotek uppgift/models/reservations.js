const bookshelf = require("./bookshelf");

const PokemonFriends = bookshelf.model("pokemonfriends", {
	tableName: "pokemonfriends",
});

module.exports = PokemonFriends;
