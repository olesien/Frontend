const reservations = require("../models/reservations");
const log = require("../logging");

const read = async (req, res) => {
    try {
        let card;

        if (req.params.id) {
            card = await reservations.where({ id: req.params.id }).fetch({
                require: false,
            });
            log.info("One reservation fetched" + JSON.stringify(card));
        } else {
            card = await reservations.fetchAll();
            log.info("All reservations fetched" + JSON.stringify(card));
        }

        if (!card) {
            log.info("reservation(s) not found");
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        return res.status(200).send({ success: true, data: { card } });
    } catch (err) {
        log.error("reservations_read" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

module.exports = { read };
