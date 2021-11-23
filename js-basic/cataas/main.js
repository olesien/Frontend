const imageEl = document.querySelector("#image");
const newImageBtn = document.querySelector("#new-image");

const fetchImage = async () => {
	const res = await fetch("https://cataas.com/cat?json=true");
	if (!res.ok) {
		alert("cat not found");
		return;
	}

	const data = await res.json();
	console.log(data);
	imageEl.src = "https://cataas.com/" + data.url;
};

fetchImage();

newImageBtn.addEventListener("click", () => {
	imageEl.src = "./spinner.gif";
	fetchImage();
});
