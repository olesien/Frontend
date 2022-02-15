const reservations = require("../models/reservations");

const read = async (req, res) => {
	try {
		let card;

		if (req.params.id) {
			card = await reservations.where({ id: req.params.id }).fetch({
				require: false,
			});
		} else {
			card = await reservations.fetchAll();
		}

		if (!card) {
			return res.status(400).send({
				success: false,
				data: "Not found",
			});
		}
		return res.status(200).send({ success: true, data: { card } });
	} catch (err) {
		console.log(err);
		return res.status(500).send({ success: false, data: err });
	}
};

module.exports = { read };
