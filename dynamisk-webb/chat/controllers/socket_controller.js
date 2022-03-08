const debug = require("debug")("chat:socket_controller");

module.exports = function (socket) {
	debug("A new client has connected", socket.id);
	socket.emit("welcome", "welcome to chat 3000");
};
