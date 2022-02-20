const loans = require("../models/loans");
const log = require("../logging");

const read = async (req, res) => {
    try {
        let card;

        if (req.params.id) {
            card = await loans.where({ id: req.params.id }).fetch({
                require: false,
            });
            log.info("One loan fetched" + JSON.stringify(card));
        } else {
            card = await loans.fetchAll();
            log.info("All loans fetched" + JSON.stringify(card));
        }

        if (!card) {
            log.info("loans(s) not found");
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        return res.status(200).send({ success: true, data: { card } });
    } catch (err) {
        log.error("loans_read" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

module.exports = { read };
