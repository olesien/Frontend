const shelves = require("../models/shelves");
const log = require("../logging");

const read = async (req, res) => {
    try {
        let card;

        if (req.params.id) {
            card = await shelves.where({ id: req.params.id }).fetch({
                require: false,
            });
            log.info("One shelve fetched" + JSON.stringify(card));
        } else {
            card = await shelves.fetchAll();
            log.info("All shelves fetched" + JSON.stringify(card));
        }

        if (!card) {
            log.info("shelve(s) not found");
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        return res.status(200).send({ success: true, data: { card } });
    } catch (err) {
        log.error("shelves_read" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

module.exports = { read };
