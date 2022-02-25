/**
 * Profile Controller
 */

const debug = require("debug")("books:profile_controller");
const { matchedData, validationResult } = require("express-validator");
const models = require("../models");

/**
 * Get authenticated user's profile
 *
 * GET /
 */
const getProfile = async (req, res) => {
    res.send({
        status: "success",
        data: {
            user: req.user,
        },
    });
};

/**
 * Update authenticated user's profile
 *
 * PUT /
 */
const updateProfile = async (req, res) => {
    // res.status(405).send({
    //     status: "error",
    //     message: "This is a workshop.",
    // });

    const userId = req.user.id;

    debug("Updating Profile");

    // make sure user exists
    const user = await new models.User({ id: userId }).fetch({
        require: false,
    });
    if (!user) {
        debug("User to update was not found. %o", { id: userId });
        res.status(404).send({
            status: "fail",
            data: "User Not Found",
        });
        return;
    }

    // check for any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({ status: "fail", data: errors.array() });
    }

    // get only the validated data from the request
    const validData = matchedData(req);

    console.log(validData);

    try {
        const updatedUser = await user.save(validData);
        debug("Updated user successfully: %O", updatedUser);

        res.send({
            status: "success",
            data: {
                user,
            },
        });
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: "Exception thrown in database when updating a new user.",
        });
        throw error;
    }
};

/**
 * Get authenticated user's books
 *
 * GET /books
 */
const getBooks = async (req, res) => {
    // res.status(405).send({
    // 	status: 'error',
    // 	message: 'This is a workshop.',
    // });
    debug(req.user);
    // const book = await new models.User.fetchAll({ withRelated: ["books"] });
    const book = await new models.User({ id: req.user.id }).fetch({
        withRelated: ["books"],
    });
    debug(book);
    res.send({
        status: "success",
        data: {
            message: "workshop",
            user: book,
        },
    });
};

module.exports = {
    getProfile,
    updateProfile,
    getBooks,
};
