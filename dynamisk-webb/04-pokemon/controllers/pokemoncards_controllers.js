const log = require("debug")("controller:pokemoncards");
const PokemonCards = require("../models/pokemonCards");
const PokemonBattles = require("../models/pokemonBattles");

const create = async (req, res) => {
    try {
        console.log(req.body);
        let friend = await new PokemonCards(req.body).save();

        return res.status(201).send({ success: true, data: { friend } });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ success: false, data: err });
    }
};

const read = async (req, res) => {
    try {
        let friend;

        if (req.params.id) {
            friend = await PokemonCards.where({ id: req.params.id }).fetch({
                require: false,
                withRelated: ["wonBattles", "lostBattles"],
            });
        } else {
            friend = await PokemonCards.fetchAll();
        }

        if (!friend) {
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        return res.status(200).send({ success: true, data: { friend } });
    } catch (err) {
        log(err);
        return res.status(500).send({ success: false, data: err });
    }
};

const update = async (req, res) => {
    try {
        console.log(req.body);
        //let friend = new PokemonCards(req.body).save();
        let friend = await PokemonCards.where({ id: req.params.id }).fetch({
            require: false,
        });
        friend = await friend.set(req.body).save();

        return res.status(201).send({ success: true, data: { friend } });
    } catch (err) {
        log(err);
        return res.status(500).send({ success: false, data: err });
    }
};

const del = async (req, res) => {
    try {
        let friend = await PokemonCards.where({ id: req.params.id }).fetch();

        await friend.destroy();
        // .then((collection) => {
        // 	console.log(collection.toJSON());
        // 	// Loopa igenom alla resultaten
        // 	collection.forEach(async (model) => {
        // 		// Radera dem en efter en
        // 		await deleteBattle(req.params.id);

        // 		model.destroy().then();
        // 	});
        // });

        if (!friend) {
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        return res.status(200).send({ success: true, data: { friend } });
    } catch (err) {
        log(err);
        return res.status(500).send({ success: false, data: err });
    }
};

const deleteBattle = async (pokemonid) => {
    await PokemonBattles.query({
        where: { winningPokemon: pokemonName },
        orWhere: { losingPokemon: pokemonName },
    })
        .fetchAll()
        .then((collection) => {
            console.log(collection.toJSON());
            // Loopa igenom alla resultaten
            collection.forEach((model) => {
                // Radera dem en efter en
                deleteBattle(req.params.id);

                model.destroy().then(() => {
                    return "destroyed";
                });
            });
        });
};

module.exports = { read, create, update, del };
