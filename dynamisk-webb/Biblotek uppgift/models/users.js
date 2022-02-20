const bookshelf = require("./bookshelf");
const reservations = require("./reservations");

const users = bookshelf.model("users", {
    tableName: "users",
    reservations() {
        return this.hasMany(reservations, "user").where({ status: "waiting" });
    },
});

module.exports = users;
