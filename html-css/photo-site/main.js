const hamburger_button = document.getElementById("hamburger_button");
const nav_wrapper = document.getElementById("nav_wrapper");
hamburger_button.addEventListener("click", navbar);

function navbar() {
    console.log("hey");
    if (nav_wrapper.style.display == "flex") {
        //hide
        nav_wrapper.style.display = "none";
    } else {
        //show
        nav_wrapper.style.display = "flex";
    }
}
