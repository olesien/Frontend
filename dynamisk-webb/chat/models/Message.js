// Message Model

const mongoose = require("mongoose");

//Declare model schema
const messageSchema = new mongoose.Schema({
	username: String,
	room: String,
	content: String,
	timestamp: Number,
});
//Declare Model
const Message = mongoose.model("Message", messageSchema);

//Export model
module.export = Message;
