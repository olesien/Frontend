const bookshelf = require("./bookshelf");

const PokemonFriends = bookshelf.Model.extend({ tableName: "pokemonfriends" });

module.exports = PokemonFriends;
