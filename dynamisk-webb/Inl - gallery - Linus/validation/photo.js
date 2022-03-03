/**
 * photo Validation Rules
 */

const { body } = require("express-validator");
const models = require("../models");

const createRules = [
	body("title").isLength({ min: 4 }),
	body("url").isLength({ min: 4 }),
	body("comment").isLength({ min: 4 }),
];

const updateRules = [
	body("title").optional().isLength({ min: 4 }),
	body("url").optional().isLength({ min: 4 }),
	body("comment").optional().isLength({ min: 4 }),
];

module.exports = {
	createRules,
	updateRules,
};
