const bookshelf = require("./bookshelf");

const PokemonCards = bookshelf.model("pokemoncards", {
	tableName: "pokemoncards",
});

module.exports = PokemonCards;
