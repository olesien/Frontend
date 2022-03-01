/**
 * User model
 */

module.exports = (bookshelf) => {
	return bookshelf.model(
		"User",
		{
			tableName: "users",
			books() {
				return this.belongsToMany("Book");
			},
		},
		{
			async login(username, password) {
				//const [username, password] = decodedPayload.split(":");

				// password = await bcrypt()

				// check if a user with this username and password exists
				const user = await new User({ username }).fetch({ require: false });
				if (!user) {
					return false;
				}

				const hashedPassword = user.get("password");

				//hash the incoming cleartext password using salt form db and stuff

				const result = await bcrypt.compare(password, hashedPassword);

				if (!result) {
					return false;
				}
				return user;
			},
		}
	);
};
