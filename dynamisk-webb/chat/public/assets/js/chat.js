const socket = io();

const startEl = document.querySelector("#start");
const chatWrapperEl = document.querySelector("#chat-wrapper");
const usernameForm = document.querySelector("#username-form");
const messagesEl = document.querySelector("#messages"); // ul element containing all messages
const messageForm = document.querySelector("#message-form");
const messageEl = document.querySelector("#message");

const onlineUsers = document.querySelector("#online-users");

let username = null;

const addMessageToChat = (data, ownMsg = false) => {
	// create new `li` element
	const liEl = document.createElement("li");

	// set class of `li` to `message`
	liEl.classList.add("message");
	if (ownMsg) {
		liEl.classList.add("you");
	}

	// set content of `li` element
	liEl.innerHTML = ownMsg
		? `<span class="timestamp">[${data.timestamp}]</span> : ${data.message}`
		: `<span class="timestamp">[${data.timestamp}]</span><span class"user"> ${data.username}</span> : ${data.message}`;

	// append `li` element to `#messages`
	messagesEl.appendChild(liEl);

	// scroll `li` element into view
	liEl.scrollIntoView();
};

const addNoticeToChat = (notice) => {
	const liEl = document.createElement("li");
	liEl.classList.add("notice");

	liEl.innerText = notice;

	messagesEl.appendChild(liEl);
	liEl.scrollIntoView();
};

// listen for when a new user connects
socket.on("user:connected", (username) => {
	addNoticeToChat(username + " connected");

	const liEl = document.createElement("li");

	// set class of `li` to `message`
	liEl.classList.add("user-name");

	liEl.id = socket.id;

	// set content of `li` element
	liEl.innerHTML = username;

	onlineUsers.appendChild(liEl);
});

// listen for when a user disconnects
socket.on("user:disconnected", (username) => {
	addNoticeToChat(username + " disconnected");
	const userE = onlineUsers.querySelector("#" + socket.id);
	if (userE) {
		userE.remove();
	}
});

// listen for incoming messages
socket.on("chat:message", (message) => {
	console.log("Someone said something:", message);

	addMessageToChat(message);
});

// get username from form and emit user:joined and show chat
usernameForm.addEventListener("submit", (e) => {
	e.preventDefault();

	username = usernameForm.username.value;

	//emit user joined event and then  after ack show chat
	socket.emit("user:joined", username, (status) => {
		console.log("server acknowkled that user joined", status);
		// hide start view

		if (status.success) {
			startEl.classList.add("hide");

			// show chat view
			chatWrapperEl.classList.remove("hide");

			// focus on inputMessage
			messageEl.focus();
		} else {
			alert("Invalid name / other issue fuck off");
		}
	});
});

// send message to server
messageForm.addEventListener("submit", (e) => {
	e.preventDefault();

	if (!messageEl.value) {
		return;
	}

	const msg = {
		username,
		message: messageEl.value,
		timestamp: new Date().toISOString(),
	};

	// send message to server
	socket.emit("chat:message", msg);

	// add message to chat

	addMessageToChat(msg, true);

	// clear message input element and focus
	messageEl.value = "";
	messageEl.focus();
});
