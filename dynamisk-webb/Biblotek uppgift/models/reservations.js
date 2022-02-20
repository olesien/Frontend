const bookshelf = require("./bookshelf");

const reservations = bookshelf.model("reservations", {
    tableName: "reservations",
});

module.exports = reservations;
