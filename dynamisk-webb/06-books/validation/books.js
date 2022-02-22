/**
 * User Validation Rules
 */

const { body } = require("express-validator");

const createRules = [
	body("title").exists().isLength({ min: 3 }),
	body("isbn").exists().isNumeric(),
	body("pages").exists().isNumeric(),
	body("author_id").exists().isNumeric(),
];

// allow only password, first_name, last_name to be updated, and only optionally
const updateRules = [
	body("title").isLength({ min: 3 }),
	body("isbn").isNumeric(),
	body("pages").isNumeric(),
	body("author_id").isNumeric(),
];

module.exports = {
	createRules,
	updateRules,
};
