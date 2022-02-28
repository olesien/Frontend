/**
 * Profile Controller
 */

const debug = require("debug")("books:profile_controller");
const { matchedData, validationResult } = require("express-validator");
const models = require("../models");
const bcrypt = require("bcrypt");

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
    // check for any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({ status: "fail", data: errors.array() });
    }

    // get only the validated data from the request
    const validData = matchedData(req);
    console.log("below 1 <-------------------------------------------- XX");
    console.log(validData);
    if (validData.password) {
        try {
            validData.password = await bcrypt.hash(validData.password, 10);
        } catch (error) {
            res.status(500).send({
                status: "error",
                message: "Exception thrown in database hashing password.",
            });
            throw error;
        }
    }

    try {
        console.log("below 2 <-------------------------------------------- XX");
        console.log(validData);
        const updatedUser = await req.user.save(validData);
        debug("Updated user successfully: %O", updatedUser);

        res.send({
            status: "success",
            data: {
                user: updatedUser,
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
    // get user and also eager-load the books-relation
    // const user = await new models.User({ id: req.user.id })
    // 	.fetch({ withRelated: ['books'] });

    // "lazy load" the books-relation
    await req.user.load("books");

    res.status(200).send({
        status: "success",
        data: {
            books: req.user.related("books"),
        },
    });
};

/**
 * Add a book to the authenticated user
 *
 * @todo 1. Validate that the book actually exists
 * @todo 2. Validate that the book they are trying to add isn't already in the list
 *
 * POST /books
 * {
 *   book_id: 5
 * }
 */
const addBook = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send({ status: "fail", data: errors.array() });
    }

    // get only the validated data from the request
    const validData = matchedData(req);
    // console.log(validData.book_id);

    const book = await new models.Book({ id: validData.book_id }).fetch({
        require: false,
        withRelated: ["users"],
    });

    // reject = false;
    // book.relations.users.models.forEach((user) => {
    //     if (user.id === req.user.id) {
    //         reject = true;
    //     }
    // });

    const reject = book.relations.users.models.find(
        (user) => user.id === req.user.id
    );
    if (reject) {
        return res.status(422).send({
            status: "fail",
            data: `Book with ID ${validData.book_id} has already been claimed by this user!.`,
        });
    }

    try {
        //const book = await new models.Book(validData).save();
        const book = await req.user.books().attach(validData.book_id);
        debug("Added new book(s) successfully: %O", book);

        res.send({
            status: "success",
            data: {
                book,
            },
        });
    } catch (error) {
        res.status(500).send({
            status: "error",
            message: "Exception thrown in database when adding a new book.",
        });
        throw error;
    }

    //everything above works fine
    // res.status(405).send({
    //     status: "Added books",
    //     message: validData,
    // });
};

module.exports = {
    getProfile,
    updateProfile,
    getBooks,
    addBook,
};
