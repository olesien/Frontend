const bookshelf = require("./bookshelf");

const PokemonBattles = bookshelf.model("pokemonbattles", {
	tableName: "pokemonbattles",
});

module.exports = PokemonBattles;
