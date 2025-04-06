// accordion

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".learn-more").forEach((button) => {
    button.addEventListener("click", function () {
      const hiddenContent = this.parentElement.querySelector(".hidden-content");
      hiddenContent.style.display =
        hiddenContent.style.display === "none" ? "block" : "none";
      this.textContent =
        hiddenContent.style.display === "none"
          ? `Learn more about ${this.dataset.name}`
          : "Show less";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const menuBtn = document.querySelector(".menu-btn");
  const overlay = document.querySelector(".overlay");
  const closeBtn = document.querySelector(".close-btn");
  const dropdownIcons = document.querySelectorAll(".fa-chevron-down");
  function checkScreenSize() {
    if (window.innerWidth >= 1024) {
      navbar.classList.add("horizontal");
      overlay.classList.remove("overlay");
      navbar.classList.remove("show");
      menuBtn.style.display = "none";
      closeBtn.style.display = "none";
      dropdownIcons.forEach((icon) => {
        icon.style.display = "none";
      });
    } else {
      navbar.classList.remove("horizontal");
      overlay.classList.add("overlay");
      menuBtn.style.display = "block";
      closeBtn.style.display = "block";
      dropdownIcons.forEach((icon) => {
        icon.style.display = "inline-block"; // Hiện lại icon trên mobile
      });
    }
  }
  checkScreenSize(); // Gọi khi tải trang
  window.addEventListener("resize", checkScreenSize); // Gọi khi resize
});
// carousel

let slideIndex = 0;

function showSlides(index) {
  const slides = document.querySelectorAll(".slide");
  if (index >= slides.length) {
    slideIndex = 0;
  }
  if (index < 0) {
    slideIndex = slides.length - 1;
  }
  document.querySelector(".slides").style.transform = `translateX(-${
    slideIndex * 100
  }%)`;
}

function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex);
}

function accordionSlide() {
  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
}

// scroll-navbar.js

function handleNavbarScroll() {
  const header = document.querySelector(".mobile-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Add event listener and call the function on scroll
window.addEventListener("scroll", handleNavbarScroll);

accordionSlide();
setInterval(() => plusSlides(1), 5000);

showSlides(slideIndex);

//
