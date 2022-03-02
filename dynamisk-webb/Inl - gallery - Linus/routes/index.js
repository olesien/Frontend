const express = require("express");
const router = express.Router();

/* GET / */
router.get("/", (req, res, next) => {
	res.send({ success: true, data: { msg: "oh, hi" } });
});

router.use("/user", require("./user"));

module.exports = router;
