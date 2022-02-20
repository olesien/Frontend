const lending_cards = require("../models/lending_cards");
const log = require("../logging");

const read = async (req, res) => {
    try {
        let card;

        if (req.params.id) {
            card = await lending_cards.where({ id: req.params.id }).fetch({
                require: false,
            });
            log.info("One lending card fetched" + JSON.stringify(card));
        } else {
            card = await lending_cards.fetchAll();
            log.info("All lending cards fetched" + JSON.stringify(card));
        }

        if (!card) {
            log.info("lending cards(s) not found");
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        return res.status(200).send({ success: true, data: { card } });
    } catch (err) {
        log.error("lending_read" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

module.exports = { read };
