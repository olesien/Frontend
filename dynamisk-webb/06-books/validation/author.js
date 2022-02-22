/**
 * User Validation Rules
 */

const { body } = require("express-validator");

const createRules = [
	body("birthyear").exists().isLength({ min: 3 }).isNumeric(),
	body("first_name").exists().isLength({ min: 2 }),
	body("last_name").exists().isLength({ min: 2 }),
];

// allow only password, first_name, last_name to be updated, and only optionally
const updateRules = [
	body("birthyear").isLength({ min: 3 }).isNumeric(),
	body("first_name").isLength({ min: 2 }),
	body("last_name").isLength({ min: 2 }),
];

module.exports = {
	createRules,
	updateRules,
};
