/**
 * Profile Validation Rules
 */

const { body } = require("express-validator");
const models = require("../models");

/**
 * Update Profile validation rules
 *
 * Required: -
 * Optional: password, first_name, last_name
 */
const updateRules = [
    body("password").optional().isLength({ min: 4 }),
    body("first_name").optional().isLength({ min: 2 }),
    body("last_name").optional().isLength({ min: 2 }),
];

const addBookRules = [
    body("book_id")
        .exists()
        .bail()
        .isInt({ min: 1 })
        .custom(async (value) => {
            //check that book ID user is trying to add actually exists
            const book = await new models.Book({ id: value }).fetch({
                require: false,
                withRelated: ["users"],
            });

            // console.log("hi", req.user.id);
            if (!book) {
                return Promise.reject(`Book with ID ${value} does not exist.`);
            }

            // reject = false;
            // book.relations.users.models.forEach((user) => {
            //     if (user.id === 1) {
            //         reject = true;
            //     }
            //     //console.log(user.id);
            // });

            // if (reject) {
            //     return Promise.reject(
            //         `Book with ID ${value} has already been claimed by this user!.`
            //     );
            // }

            // const does_not_own = await new models.Book({ id: value }).fetch({
            //     require: false,
            // });

            // const user = await new models.Book({ id: value }).fetch({
            //     withRelated: ["books"],
            // });

            // console.log(user);
            // console.log(book_already_added.relations.users.model());
            // if (book_already_added) {
            //     return Promise.reject(
            //         `Book with ID ${value} is already added.`
            //     );
            // }

            return Promise.resolve();
        }),
];

module.exports = {
    updateRules,
    addBookRules,
};
