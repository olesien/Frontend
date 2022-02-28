const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

// const debug = require("debug")("gallery:register_controller");

const registerController = require("../controllers/register_controller");
const userValidationRules = require("../validation/user");
/* GET / */
router.get("/", (req, res, next) => {
    res.send({ success: true, data: { msg: "Returning from :/" } });
});

router.use("/photos", require("./photos"));

// debug("Server started....");
// router.use("/books", require("./books"));
// router.use("/profile", auth.basic, require("./profile"));
// router.use("/register", require("./register"));
//router.use('/users', require('./users'));

//register new user

// router.post(
//     "/register",
//     userValidationRules.createRules,
//     registerController.register
// );
module.exports = router;
