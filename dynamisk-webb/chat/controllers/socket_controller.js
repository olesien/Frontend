const debug = require("debug")("chat:socket_controller");

module.exports = function (socket) {
	debug("A new client has connected", socket.id);

	socket.emit("welcome", "welcome to chat 3000");
	socket.broadcast.emit("chat-welcome", {
		user: socket.id,
		message: "Joined the chat",
	});
	socket.on("disconnect", function () {
		debug(`Client ${this.id} disconnected :(`);
		socket.broadcast.emit("chat-goodbye", {
			user: this.id,
			message: "Left the chat",
		});
	});
	socket.on("chat-message", function (data) {
		debug("Someone did something", data.message);
		this.emit("chat-message", { user: "You", message: data.message });
		this.broadcast.emit("chat-message", {
			user: data.user,
			message: data.message,
		});
	});
	socket.on("chat-typing", function (data) {
		//debug("Someone did something", data.message);
		this.broadcast.emit("chat-typing", {
			user: data.user,
			message: data.message,
		});
	});
};
