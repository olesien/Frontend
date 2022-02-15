const bookshelf = require("./bookshelf");

const loans = bookshelf.model("loans", {
	tableName: "loans",
});

module.exports = loans;
