/**
 * user model
 */

const bcrypt = require("bcrypt");
module.exports = (bookshelf) => {
	return bookshelf.model(
		"User",
		{
			tableName: "users",
		},
		{
			hashSaltRounds: 10,
			async login(email, password) {
				// find the user in the database based on the unique mail
				const user = await new this({ email }).fetch({
					require: false,
				});
				if (!user) {
					return false;
				}
				//the hashed password that the user has
				const dbPassword = user.get("password");

				// hash the password that is in cleartext with the salt from db, compare with the db-hash
				const result = await bcrypt.compare(password, dbPassword);
				if (!result) {
					return false;
				}

				// return with the user object, login succesful
				return user;
			},
		}
	);
};
