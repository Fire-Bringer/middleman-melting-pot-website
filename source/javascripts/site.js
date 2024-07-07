let tl = gsap.timeline({delay: 0});

tl.to(".col", {
  top: "0",
  duration: 3,
  ease: "power4.inOut"
});

tl.to(".c-1 .item", {
  top: "0",
  stagger: 0.25,
  duration: 3,
  ease: "power4.inOut"
}, "-=2");

tl.to(".c-2 .item", {
  top: "0",
  stagger: -0.25,
  duration: 3,
  ease: "power4.inOut"
}, "-=4");

tl.to(".c-3 .item", {
  top: "0",
  stagger: 0.25,
  duration: 3,
  ease: "power4.inOut"
}, "-=4");

tl.to(".c-4 .item", {
  top: "0",
  stagger: -0.25,
  duration: 3,
  ease: "power4.inOut"
}, "-=4");

tl.to(".c-5 .item", {
  top: "0",
  stagger: 0.25,
  duration: 3,
  ease: "power4.inOut"
}, "-=4");

tl.to(".hero-container", {
  scale: 6,
  duration: 4,
  ease: "power4.inOut"
}, "-=2");

tl.to(".hero-nav-item a, .title p, .slide-num p, .preview img", {
  top: 0,
  stagger: 0.075,
  duration: 1,
  ease: "power3.out",
}, "-=1.5");

tl.to(".icon ion-icon, .icon-2 ion-icon", {
  scale: 1,
  stagger: 0.05,
  ease: "power3.out",
}, "-=1");




// Menu Tabs Start
function openMenu(evt, menuName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(menuName).style.display = "flex";
  evt.currentTarget.className += " active";
}


// Get the element with id="defaultOpen" and click on it
window.addEventListener("DOMContentLoaded", function() {
  document.getElementById("defaultOpen").click();
});

document.addEventListener('DOMContentLoaded', function() {

  console.log('Hello from site.js')

    // Hamburger Menu

    const hamburger = document.querySelector(".hamburger");
    console.log(hamburger);
    const navMenu = document.querySelector(".nav-menu");
    console.log(navMenu);

    hamburger.addEventListener("click", mobileMenu);

    console.log("Event listener added on click to mobile menu function");

    function mobileMenu() {
    hamburger.classList.add("active");
    console.log(hamburger.classList);
    navMenu.classList.add("active");
    console.log(navMenu.classList);
    }

    const navLink = document.querySelectorAll(".nav-link");
    console.log(navLink);

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    }

    // Close menu when clicking outside of hamburger menu and nav menu
    document.body.addEventListener("click", function(event) {
    const isClickInsideHamburger = hamburger.contains(event.target);
    const isClickInsideNavMenu = navMenu.contains(event.target);
    if (!isClickInsideHamburger && !isClickInsideNavMenu) {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    }
    });

});
