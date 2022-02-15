const bookshelf = require("./bookshelf");

const PokemonCards = bookshelf.Model.extend({ tableName: "pokemoncards" });

module.exports = PokemonCards;
