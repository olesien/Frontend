const messagesEl = document.querySelector("#messages");
const typingEl = document.querySelector("#typing");

const messageForm = document.querySelector("#message-form");
const messageEl = document.querySelector("#message");
const userEl = document.querySelector("#user");

const socket = io();
const addMessageToChat = (data) => {
	const liEl = document.createElement("li");
	liEl.innerText = `${data.user}: ${data.message}`;
	messagesEl.appendChild(liEl);
};
socket.on("welcome", (data) => {
	console.log("A welcome message was received", data);
});

socket.on("chat-welcome", (data) => {
	addMessageToChat(data);
});

socket.on("chat-goodbye", (data) => {
	addMessageToChat(data);
});

socket.on("chat-typing", (data) => {
	//addMessageToChat(data);
	console.log(typingEl.querySelectorAll("#" + data.user));
	if (typingEl.querySelectorAll("#" + data.user).length === 0) {
		const liEl = document.createElement("li");
		liEl.innerText = `${data.user} ${data.message}`;
		liEl.id = data.user;
		typingEl.appendChild(liEl);
		setTimeout(() => {
			liEl.remove();
		}, 5000);
	}
});

socket.on("chat-message", (data) => {
	console.log(data);
	addMessageToChat(data);
});

messageEl.addEventListener("keyup", () => {
	if (!userEl.value) {
		return;
	}
	socket.emit("chat-typing", {
		user: userEl.value,
		message: "Is typing.......",
	});
});

messageForm.addEventListener("submit", (e) => {
	e.preventDefault();

	console.log("Someone submitted something:", messageEl.value);
	if (!messageEl.value) {
		return;
	}

	if (!userEl.value) {
		alert("You need to enter a nickname");
		return;
	}
	//send message to server
	socket.emit("chat-message", {
		user: userEl.value,
		message: messageEl.value,
	});

	//clear message
	messageEl.value = "";
	messageEl.focus();
});
