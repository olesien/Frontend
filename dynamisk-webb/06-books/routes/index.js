const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

// const registerController = require("../controllers/register_controller");
const authController = require("../controllers/auth_controller");
const userValidationRules = require("../validation/user");
/* GET / */
router.get("/", (req, res, next) => {
	res.send({ success: true, data: { msg: "oh, hi" } });
});

router.use("/authors", require("./authors"));
router.use("/books", require("./books"));
router.use("/profile", auth.basic, require("./profile"));
// router.use("/register", require("./register"));
//router.use('/users', require('./users'));

//login with user to get a JWT token
router.post("/login", authController.login);

//register new user

router.post(
	"/register",
	userValidationRules.createRules,
	authController.register
);
module.exports = router;
