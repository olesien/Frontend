const element = document.getElementsByClassName('animation1')[0];
const button = document.getElementsByClassName('button')[0];
function toggleAnimation() {
    console.log('works');
    console.log(button.innerHTML);
    //element.style.animation = "";
    element.animate([
        // keyframes
        { transform: 'translateY(0)', backgroundColor: 'red' },
        { transform: 'translateY(-25px)', backgroundColor: 'blue' },
        { transform: 'translateY(0)', backgroundColor: 'red' },
      ], {duration: 400, iterations: 5});
    
    // if (button.innerHTML == "Set Animation!") {
    //     //Set animation
    //     element.id = 'animation';
    //     button.innerHTML = "Remove animation!";
    // } else {
    //     //Unset animation
    //     element.removeAttribute('animation');
    //     button.innerHTML = "Set Animation!";
        
    // }
    
    //console.log(button.id);
    
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    //const height = document.getElementById("myDropdown").offsetHeight;
    //console.log(height);
    document.getElementById("myDropdown").animate([
        // keyframes
        { height: 0 },
        { height: "125px" },
      ], {duration: 400});
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }