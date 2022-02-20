const titles = require("../models/titles");
const log = require("../logging");

const read = async (req, res) => {
    try {
        let card;

        if (req.params.id) {
            card = await titles.where({ id: req.params.id }).fetch({
                require: false,
            });
            log.info("One title fetched" + JSON.stringify(card));
        } else {
            card = await titles.fetchAll();
            log.info("All titles fetched" + JSON.stringify(card));
        }

        if (!card) {
            log.info("title(s) not found");
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        return res.status(200).send({ success: true, data: { card } });
    } catch (err) {
        log.error("titles_read" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

module.exports = { read };
