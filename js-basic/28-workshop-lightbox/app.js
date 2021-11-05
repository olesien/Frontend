/**
 * Workshop: Lightbox
 *
 */

const photosEl = document.querySelector(".photos");
const lightboxWrapperEl = document.querySelector("#lightbox-wrapper");
const imgFluidEl = document.querySelector("#fluid-image");

photosEl.addEventListener("click", (e) => {
	console.log("blocked", e.target.tagName);
	//e.preventDefault();
	if (e.target.tagName === "IMG") {
		console.log("blocked");
		e.preventDefault();
		lightboxWrapperEl.style.display = "block";
		imgFluidEl.src = e.target.src;
	}
});

lightboxWrapperEl.addEventListener("click", (e) => {
	lightboxWrapperEl.style.display = "none";
});
