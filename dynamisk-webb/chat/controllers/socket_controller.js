/**
 * Socket Controller
 */

const debug = require("debug")("chat:socket_controller");

//list of rooms and sockets ids and hteir usernames

const users = {};
const rooms = [
	{
		id: "general",
		name: "General",
		users: {},
	},
	{
		id: "major",
		name: "Major",
		users: {},
	},
	{
		id: "sergant",
		name: "Sergant",
		users: {},
	},
];

let io = null;

const findRoomIndex = (user_id) => {
	if (!user_id) {
		return -1;
	}
	debug(rooms);
	const room = rooms.findIndex((room) => user_id in room.users);
	debug(room);
	return room;
};

const handleDisconnect = function () {
	debug(`Client ${this.id} disconnected :(`);
	if (!this.id) {
		return;
	}
	const roomIndex = findRoomIndex(this.id);
	const room = rooms[roomIndex];
	debug(room);
	if (room && "users" in room) {
		debug("user: " + room.users[this.id]);
		this.broadcast
			.to(room.id)
			.emit("user:disconnected", room.users[this.id]);
		delete room.users[this.id];
		this.broadcast.to(room.id).emit("user:list", room.users);
	}
	debug(this.id);

	//const roomIndex = rooms.findIndex((room) => this.id in room.users);
	//debug(roomIndex);

	// if (room) {
	// 	delete room.users[this.id];
	// }
};

// const changeUserList = (this, username, room_id) => {
// 	const room = rooms.find((room) => room.id === room_id);
// 	if (room && "users" in room) {
// 		room.users[this.id] = username;
// 	}

// 	//debug(rooms);

// 	this.broadcast.to(room_id).emit("user:list", room.users);
// };

const handleUserJoined = function (username, room_id, callback) {
	//assosciate this ID with username
	//users[this.id] = username;

	debug(
		`user ${username} with this id ${this.id} has joined. Wants to join ${room_id}`
	);
	this.join(room_id);

	//add socket to list of online users
	const room = rooms.find((room) => room.id === room_id);
	if (room && "users" in room) {
		room.users[this.id] = username;
	}

	debug(rooms);

	//changeUserList(this, username, room_id);

	this.broadcast.to(room_id).emit("user:connected", username);
	this.broadcast.to(room_id).emit("user:list", room.users);
	//confirm join
	callback({ success: true, list: "users" in room ? room.users : [] });
};

const handleChatMessage = function (data) {
	debug("Someone said something: ", data);

	//store message in messages collection!

	const date = new Date();
	data.timestamp = date;
	// emit `chat:message` event to everyone EXCEPT the sender
	const roomIndex = findRoomIndex(this.id);
	//debug(this.rooms[1]);
	if (roomIndex >= 0) {
		this.broadcast.to(rooms[roomIndex].id).emit("chat:message", data);
	}
};

module.exports = function (socket, _io) {
	io = _io;
	debug("a new client has connected", this.id);

	// broadcast that a new user has connected
	//this.broadcast.emit("user:connected");

	//io.emit("new connection", "A new user connected");

	// handle user disconnect
	socket.on("disconnect", handleDisconnect);
	//handle user join
	socket.on("user:joined", handleUserJoined);

	// handle user emitting a new message
	socket.on("chat:message", handleChatMessage);
};
