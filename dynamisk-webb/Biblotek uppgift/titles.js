const bookshelf = require("./bookshelf");

const Titles = bookshelf.Model.extend({ tableName: "titles" });

module.exports = Titles;
