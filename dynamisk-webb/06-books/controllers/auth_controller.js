/**
 * Register controller
 */

const bcrypt = require("bcrypt");

const debug = require("debug")("books:register_controller");
const { matchedData, validationResult } = require("express-validator");
const models = require("../models");

//login user and sign a JWT token and return it
//username, password
const login = async (req, res) => {
	//check if a user with the username exists
};

// Register new user

const register = async (req, res) => {
	// check for any validation errors
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).send({ status: "fail", data: errors.array() });
	}

	// get only the validated data from the request
	const validData = matchedData(req);
	console.log("The validated data:", validData);

	try {
		validData.password = await bcrypt.hash(validData.password, 10);
	} catch (error) {
		res.status(500).send({
			status: "error",
			message: "Exception thrown in password hashing.",
		});
		throw error;
	}

	try {
		const user = await new models.User(validData).save();
		debug("Created new user successfully: %O", user);

		res.send({
			status: "success",
			data: {
				user,
			},
		});
	} catch (error) {
		res.status(500).send({
			status: "error",
			message: "Exception thrown in database when creating a new user.",
		});
		throw error;
	}
};

/**
 * Store a new resource
 *
 * POST /
 */

module.exports = { register };
