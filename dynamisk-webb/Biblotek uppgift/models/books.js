const bookshelf = require("./bookshelf");

const books = bookshelf.model("books", {
    tableName: "books",
});

module.exports = books;
