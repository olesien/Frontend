const bookshelf = require("./bookshelf");
const pokemonbattles = require("./pokemonBattles");

const PokemonCards = bookshelf.model("pokemoncards", {
    tableName: "pokemoncards",
    wonBattles() {
        return this.hasMany(pokemonbattles, "winningPokemon");
    },
    lostBattles() {
        return this.hasMany(pokemonbattles, "losingPokemon");
    },
});

module.exports = PokemonCards;
