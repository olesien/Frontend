const bookshelf = require("./bookshelf");

const users = bookshelf.model("users", {
	tableName: "users",
});

module.exports = users;
