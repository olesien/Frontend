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
		e.preventDefault();
		lightboxWrapperEl.style.display = "block";
		imgFluidEl.src = e.target.src;
		let title = e.target.parentElement.title;
		lightboxWrapperEl.querySelector(".caption").innerText = title;
	}
});

lightboxWrapperEl.addEventListener("click", (e) => {
	lightboxWrapperEl.style.display = "none";
});
