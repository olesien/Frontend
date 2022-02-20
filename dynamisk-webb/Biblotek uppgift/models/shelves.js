const bookshelf = require("./bookshelf");

const shelves = bookshelf.model("shelves", {
    tableName: "shelves",
});

module.exports = shelves;
