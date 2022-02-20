const books = require("../models/books");
const log = require("../logging");
// const PokemonBattles = require("../models/pokemonBattles");

const create = async (req, res) => {
    try {
        log.debug("CREATE", req.body);
        let card = await new books(req.body).save();
        log.info("books successfully saved" + JSON.stringify(card));
        return res.status(201).send({ success: true, data: { card } });
    } catch (err) {
        log.error("books_create" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

const read = async (req, res) => {
    try {
        let card;

        if (req.params.id) {
            card = await books.where({ id: req.params.id }).fetch({
                require: false,
            });
            log.info("One book fetched" + JSON.stringify(card));
        } else {
            card = await books.fetchAll();
            log.info("All books fetched" + JSON.stringify(card));
        }

        if (!card) {
            log.info("book(s) not found");
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        return res.status(200).send({ success: true, data: { card } });
    } catch (err) {
        log.error("books_read" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

const update = async (req, res) => {
    try {
        log.debug("UPDATE", req.body);
        //let card = new books(req.body).save();
        let card = await books.where({ id: req.params.id }).fetch({
            require: false,
        });
        card = await card.set(req.body).save();

        log.info("Updated books, " + JSON.stringify(card));

        return res.status(201).send({ success: true, data: { card } });
    } catch (err) {
        log.error("books_update" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

const del = async (req, res) => {
    try {
        let card = await books.where({ id: req.params.id }).fetch();

        await card.destroy();
        // .then((collection) => {
        // 	console.log(collection.toJSON());
        // 	// Loopa igenom alla resultaten
        // 	collection.forEach(async (model) => {
        // 		// Radera dem en efter en
        // 		await deleteBattle(req.params.id);

        // 		model.destroy().then();
        // 	});
        // });

        if (!card) {
            log.info(`BOOK ID ${req.params.id} NOT deleted, not found`);
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        log.info(
            `Book ID ${req.params.id} deleted, return data: ${JSON.stringify(
                card
            )}`
        );
        return res.status(200).send({ success: true, data: { card } });
    } catch (err) {
        log.error("book_del" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

// const deleteBattle = async (pokemonid) => {
// 	await PokemonBattles.query({
// 		where: { winningPokemon: pokemonName },
// 		orWhere: { losingPokemon: pokemonName },
// 	})
// 		.fetchAll()
// 		.then((collection) => {
// 			console.log(collection.toJSON());
// 			// Loopa igenom alla resultaten
// 			collection.forEach((model) => {
// 				// Radera dem en efter en
// 				deleteBattle(req.params.id);

// 				model.destroy().then(() => {
// 					return "destroyed";
// 				});
// 			});
// 		});
// };

module.exports = { read, create, update, del };
