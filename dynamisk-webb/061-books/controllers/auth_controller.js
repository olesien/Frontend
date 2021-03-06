/**
 * Auth Controller
 */

const bcrypt = require("bcrypt");
const debug = require("debug")("books:auth_controller");
const jwt = require("jsonwebtoken");
const { matchedData, validationResult } = require("express-validator");
const models = require("../models");

/**
 * Login a user, sign a JWT token and return it
 *
 * POST /login
 * {
 *   "username": "",
 *   "password": ""
 * }
 */
const login = async (req, res) => {
	// destructure username and password from request body
	const { username, password } = req.body;

	// login the user
	const user = await models.User.login(username, password);
	if (!user) {
		return res.status(401).send({
			status: "fail",
			data: "Authentication failed.",
		});
	}

	// construct jwt payload
	const payload = {
		sub: user.get("username"),
		user_id: user.get("id"),
		name: user.get("first_name") + " " + user.get("last_name"),
	};

	// sign payload and get access-token
	const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
		expiresIn: process.env.ACCESS_TOKEN_LIFETIME || "1h",
	});

	//sign payload and refresh token
	const refresh_token = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
		expiresIn: process.env.REFRESH_TOKEN_LIFETIME || "10h",
	});

	// respond with the access-token
	return res.send({
		status: "success",
		data: {
			access_token,
			refresh_token,
			//			access_token: access_token,
		},
	});
};

// **
//  * Refresh user, refresh a JWT token and return it
//  *
//  * POST /refresh
//  * {
//  *   "token": ""
//  * }
//  */
const refresh = async (req, res) => {
	//validate refresh token -> check signature and expiry date
	const refresh_token = req.body.token;

	try {
		//verify token using refresh token secret
		const payload = jwt.verify(refresh_token, process.env.REFRESH_TOKEN_SECRET);

		//remove expiry

		delete payload?.iat;
		delete payload?.exp;

		// sign payload and get access-token
		const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
			expiresIn: process.env.ACCESS_TOKEN_LIFETIME || "1h",
		});

		// respond with the access-token
		return res.send({
			status: "success",
			data: {
				access_token,
				//			access_token: access_token,
			},
		});
	} catch (error) {
		debug(error);
		return res.status(401).send({
			status: "fail",
			data: "Invalid token",
		});
	}
};

/**
 * Register a new user
 *
 * POST /register
 */
const register = async (req, res) => {
	// check for any validation errors
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).send({ status: "fail", data: errors.array() });
	}

	// get only the validated data from the request
	const validData = matchedData(req);

	console.log("The validated data:", validData);

	// generate a hash of `validData.password`
	// and overwrite `validData.password` with the generated hash
	try {
		validData.password = await bcrypt.hash(
			validData.password,
			models.User.hashSaltRounds
		);
	} catch (error) {
		res.status(500).send({
			status: "error",
			message: "Exception thrown when hashing the password.",
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

module.exports = {
	login,
	refresh,
	register,
};
