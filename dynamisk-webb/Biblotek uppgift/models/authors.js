const bookshelf = require("./bookshelf");
const titles = require("./titles");

const authors = bookshelf.model("authors", {
    tableName: "authors",
    titles() {
        return this.hasMany(titles, "authorid");
    },
});

module.exports = authors;
