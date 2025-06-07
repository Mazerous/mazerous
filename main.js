document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.getElementById("enter-button");
  const enterPanel = document.getElementById("enter-panel");
  const navToggle = document.getElementById("nav-toggle");
  const navbar = document.querySelector(".navbar");
  const hamburger = document.getElementById("hamburger");

  // Hide enter panel on click
  enterButton.addEventListener("click", () => {
    enterPanel.style.opacity = "0";
    enterPanel.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
      enterPanel.style.display = "none";
    }, 600);
  });

  // Collapse navbar and show hamburger
  navToggle.addEventListener("click", () => {
    navbar.classList.add("collapsed");
    hamburger.classList.add("show-hamburger");
  });

  // Expand navbar and hide hamburger
  hamburger.addEventListener("click", () => {
    navbar.classList.remove("collapsed");
    hamburger.classList.remove("show-hamburger");
  });

  // Match hamburger height and width to navbar dynamically
  function matchHamburgerSize() {
    if (navbar && hamburger) {
      const navbarHeight = window.getComputedStyle(navbar).height;
      hamburger.style.height = navbarHeight;
      hamburger.style.width = navbarHeight; // make it a square
    }
  }

  matchHamburgerSize(); // run on load
  window.addEventListener("resize", matchHamburgerSize); // run on resize
});
