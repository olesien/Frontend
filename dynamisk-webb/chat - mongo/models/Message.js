/**
 * Message Model
 */
const mongoose = require("mongoose");

// Declare Model Schema
const messageSchema = new mongoose.Schema({
	username: String,
	room: String,
	content: { type: String, trim: true },
	timestamp: { type: Number, min: 1647592081000 },
	users: [""],
});

// Declare Model
const Message = mongoose.model("Message", messageSchema);

// Export Model
module.exports = Message;
