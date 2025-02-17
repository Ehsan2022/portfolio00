/** @format */

// Sidebar Toggle
const sidebarToggle = document.getElementById("sidebarToggle");
const toggleIcon = document.getElementById("toggleIcon");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

sidebarToggle.addEventListener("click", function () {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
  if (toggleIcon.classList.contains("fa-bars")) {
    toggleIcon.classList.remove("fa-bars");
    toggleIcon.classList.add("fa-close");
  } else {
    toggleIcon.classList.remove("fa-close");
    toggleIcon.classList.add("fa-bars");
  }
});

overlay.addEventListener("click", function () {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
  toggleIcon.classList.remove("fa-close");
    toggleIcon.classList.add("fa-bars");
    flag = true;
});

// Dark/Light Mode Toggle
const modeToggle = document.getElementById("modeToggle");
const body = document.body;
const modeIcon = modeToggle.querySelector("i");

// Check for saved mode in localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  modeIcon.classList.remove("fa-moon");
  modeIcon.classList.add("fa-sun");
}

modeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");
  if (body.classList.contains("dark-mode")) {
    modeIcon.classList.remove("fa-moon");
    modeIcon.classList.add("fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    modeIcon.classList.remove("fa-sun");
    modeIcon.classList.add("fa-moon");
    localStorage.setItem("theme", "light");
  }
});

// Initialize automatic Carousel for Testimonials
$(document).ready(function () {
  $(".testimonial-slider").slick({
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 2,
    adaptiveHeight: true,
    arrows: false,
  });
});
