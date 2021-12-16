const hamburgerBtn = document.querySelector(".hamburger-container");
const logo = document.querySelector(".logo");
const hideNavBtn = document.querySelector(".hide-nav");
const navbarContainer = document.querySelector(".navbar-container");

const options = document.querySelectorAll(".option");
const payList = document.querySelectorAll(".pay");

const backToTopBtn = document.querySelector("#back-to-top");

hamburgerBtn.addEventListener("click", () => {
    logo.id = "hide-logo";
    hideNavBtn.id = "show-hide-nav";
    navbarContainer.id = "show-navbar-container";
});

hideNavBtn.addEventListener("click", () => {
    logo.id = "";
    hideNavBtn.id = "";
    navbarContainer.id = "";
});

options.forEach((option, index) => {
    option.addEventListener("click", (e) => {
        console.log(index);
        let toggleLater = false;
        if (payList[index].classList.contains("hide")) {
            toggleLater = true;
        }
        payList.forEach((pay) => {
            pay.classList.add("hide");
        });
        if (toggleLater) {
            payList[index].classList.toggle("hide");
        }
    });
});

backToTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});
