const authors = require("../models/authors");
const log = require("../logging");

const create = async (req, res) => {
    try {
        log.debug("CREATE", req.body);
        let card = await new authors(req.body).save();
        log.info("author successfully saved" + JSON.stringify(card));
        return res.status(201).send({ success: true, data: { card } });
    } catch (err) {
        log.error("author_create" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

const read = async (req, res) => {
    try {
        let card;

        if (req.params.id) {
            card = await authors.where({ id: req.params.id }).fetch({
                require: false,
                withRelated: ["titles"],
            });
            log.info("One author fetched" + JSON.stringify(card));
        } else {
            card = await authors.fetchAll();
            log.info("All authors fetched" + JSON.stringify(card));
        }

        if (!card) {
            log.info("author(s) not found");
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        return res.status(200).send({ success: true, data: { card } });
    } catch (err) {
        log.error("author_read" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

const update = async (req, res) => {
    try {
        log.debug("UPDATE", req.body);
        //let card = new authors(req.body).save();
        let card = await authors.where({ id: req.params.id }).fetch({
            require: false,
        });
        card = await card.set(req.body).save();

        log.info("Updated author, " + JSON.stringify(card));

        return res.status(201).send({ success: true, data: { card } });
    } catch (err) {
        log.error("author_update" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

const del = async (req, res) => {
    try {
        let card = await authors.where({ id: req.params.id }).fetch();

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
            log.info(`Author ID ${req.params.id} NOT deleted, not found`);
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        log.info(
            `Author ID ${req.params.id} deleted, return data: ${JSON.stringify(
                card
            )}`
        );
        return res.status(200).send({ success: true, data: { card } });
    } catch (err) {
        log.error("author_del" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

module.exports = { read, create, update, del };
