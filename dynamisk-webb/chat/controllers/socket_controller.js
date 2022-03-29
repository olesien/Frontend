/**
 * Socket Controller
 */

const debug = require("debug")("chat:socket_controller");
const models = require("../models");

//list of sockets ids and hteir usernames
const users = {};

module.exports = function (socket) {
	debug("a new client has connected", socket.id);

	// broadcast that a new user has connected
	//socket.broadcast.emit("user:connected");

	// handle user disconnect
	socket.on("disconnect", function () {
		debug(`Client ${socket.id} disconnected :(`);

		this.broadcast.emit("user:disconnected", users[socket.id]);
		delete users[socket.id];
	});
	//handle user join
	socket.on("user:joined", function (username, callback) {
		//assosciate socket ID with username
		users[socket.id] = username;
		socket.broadcast.emit("user:connected", username);
		debug(`user ${username} with socket id ${socket.id} has joined`);
		//confirm join
		callback({ success: true });
	});

	// handle user emitting a new message
	socket.on("chat:message", function (data) {
		debug("Someone said something: ", data);

		data.timestamp = new Date().toISOString();
		// emit `chat:message` event to everyone EXCEPT the sender
		this.broadcast.emit("chat:message", data);
		//save message..
		const message = new models.Message(data);
	});
};
