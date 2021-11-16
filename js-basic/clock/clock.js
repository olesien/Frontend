/*
console.log(1);
console.log(2);
console.log(3);

setTimeout( () => {
	console.log("Yooohooo!");
}, 5000 );

console.log(4);
console.log(5);

let tick = 0;
setInterval( () => {
	tick++;
	console.log("tick:", tick);
}, 1000);

console.log("ticker started");
*/

const clockWrapperEl = document.querySelector(".clock-wrapper");
const clock = true; //change this to false for countdown

let seconds = 60; // gets current timestamp when this line was executed
// console.log("Hour:", now.getHours());
// console.log("Minute:", now.getMinutes());
// console.log("Second:", now.getSeconds());

const transformTime = (time) => {
	let timeS = time.toString();
	return time > 9 ? timeS : "0" + timeS;
};

const updateClock = () => {
	const now = new Date();
	console.log(now);
	clockWrapperEl.innerHTML = `				<span id="hour">${transformTime(
		now.getHours()
	)}</span>:<span id="minute">${transformTime(
		now.getMinutes()
	)}</span>:<span id="second"
					>${transformTime(now.getSeconds())}</span
				>`;
};

const updateCountDown = () => {
	seconds--;
	console.log(seconds);

	const currentTime = (type) => {
		switch (type) {
			case "hour":
				return Math.floor((seconds / 60 ** 2) % 60);
			case "minute":
				return Math.floor((seconds / 60) % 60);
			case "second":
				return seconds % 60;
		}
	};

	clockWrapperEl.innerHTML = `				<span id="hour">${transformTime(
		currentTime("hour")
	)}</span>:<span id="minute">${transformTime(
		currentTime("minute")
	)}</span>:<span id="second"
					>${transformTime(currentTime("second"))}</span
				>`;
	if (seconds == 0) {
		alert("time is up!");
		clearInterval(1);
	}
};
if (clock) {
	setInterval(() => updateClock(), 500);
	updateClock();
} else {
	setInterval(() => updateCountDown(), 1000);
}
