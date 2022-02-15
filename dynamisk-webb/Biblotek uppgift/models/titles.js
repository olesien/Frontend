const bookshelf = require("./bookshelf");

const titles = bookshelf.model("titles", {
	tableName: "titles",
});

module.exports = titles;
