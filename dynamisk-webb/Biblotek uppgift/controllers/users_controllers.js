const users = require("../models/users");
const log = require("../logging");

const read = async (req, res) => {
    try {
        let card;

        if (req.params.id) {
            card = await users.where({ id: req.params.id }).fetch({
                require: false,
                withRelated: ["reservations"],
            });
            log.info("One user fetched" + JSON.stringify(card));
        } else {
            card = await users.fetchAll({
                require: false,
                withRelated: ["reservations"],
            });
            log.info("All users fetched" + JSON.stringify(card));
        }

        if (!card) {
            log.info("user(s) not found");
            return res.status(400).send({
                success: false,
                data: "Not found",
            });
        }
        return res.status(200).send({ success: true, data: { card } });
    } catch (err) {
        log.error("users_read" + JSON.stringify(err));
        return res.status(500).send({ success: false, data: err });
    }
};

module.exports = { read };
