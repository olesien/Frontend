const bookshelf = require("./bookshelf");

const Authors = bookshelf.Model.extend({ tableName: "authors" });

module.exports = Authors;
