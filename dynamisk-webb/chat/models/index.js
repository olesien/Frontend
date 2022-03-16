// Setting up the database connection
const debug = require("debug")("chat:models");
const mongoose = require("mongoose");

//Set up db connection
const connect = async () => {
	try {
		await mongoose.connect(process.env.DB_CONNECTION);
		debug("Connected to MongoDB atlas");
	} catch (error) {
		debug("Error when trying to connect to mongoDB atlas: ", error);
		throw error;
	}
};

// Set up the models we want to use in our app
const models = {};
models.Message = require("./Message");

// Export all the things
module.exports = {
	connect,
	...models,
};
