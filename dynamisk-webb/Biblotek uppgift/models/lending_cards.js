const bookshelf = require("./bookshelf");

const lending_cards = bookshelf.model("lending_cards", {
    tableName: "lending_cards",
});

module.exports = lending_cards;
