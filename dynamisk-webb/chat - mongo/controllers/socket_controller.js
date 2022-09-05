/**
 * Socket Controller
 */

const debug = require("debug")("chat:socket_controller");
const models = require("../models");

let io = null; // socket.io server instance

// list of rooms and their connected users
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

const getRoomById = (id) => rooms.find((chatroom) => chatroom.id === id);

const handleDisconnect = function () {
	debug(`Client ${this.id} disconnected :(`);

	// find the room that this socket is part of
	const room = rooms.find((chatroom) =>
		chatroom.users.hasOwnProperty(this.id)
	);

	// if socket was not in a room, don't broadcast disconnect
	if (!room) {
		return;
	}

	// let everyone in the room know that this user has disconnected
	this.broadcast.to(room.id).emit("user:disconnected", room.users[this.id]);

	// remove user from list of users in that room
	delete room.users[this.id];

	// broadcast list of users in room to all connected sockets EXCEPT ourselves
	this.broadcast.to(room.id).emit("user:list", room.users);
};

// Handle when a user has joined the chat
const handleUserJoined = async function (username, room_id, callback) {
	debug(
		`User ${username} with socket id ${this.id} wants to join room '${room_id}'`
	);

	// join room
	this.join(room_id);

	// add socket to list of online users in this room
	// a) find room object with `id` === `general`
	const room = getRoomById(room_id);

	// b) add socket to room's `users` object
	room.users[this.id] = username;

	// let everyone know that someone has connected to the chat
	this.broadcast.to(room.id).emit("user:connected", username);

	// get all messages from the database
	const oneHour = 1000 * 60 * 60;
	const messages = await models.Message.find({
		room: room.name.toLowerCase(),
	})
		.where("timestamp")
		.gt(Date.now() - oneHour)
		.limit(10);

	debug(messages, room.name);

	// confirm join
	callback({
		success: true,
		roomName: room.name,
		messages,
		users: room.users,
	});

	// broadcast list of users in room to all connected sockets EXCEPT ourselves
	this.broadcast.to(room.id).emit("user:list", room.users);
};

const handleChatMessage = async function (data) {
	debug("Someone said something: ", data);

	const room = getRoomById(data.room);

	// emit `chat:message` event to everyone EXCEPT the sender
	this.broadcast.to(room.id).emit("chat:message", data);

	try {
		const message = new models.Message({
			...data,
			timestamp: 1,
			users: Object.values(room.users),
		});
		// save message in database

		await message.save();
	} catch (error) {
		socket.emit("chat:notice", {
			message: "Could not save your message in the database",
		});
	}
};

module.exports = function (socket, _io) {
	io = _io;

	debug("a new client has connected", socket.id);

	io.emit("new-connection", "A new user connected");

	// handle user disconnect
	socket.on("disconnect", handleDisconnect);

	// handle user joined
	socket.on("user:joined", handleUserJoined);

	// handle user emitting a new message
	socket.on("chat:message", handleChatMessage);
};
