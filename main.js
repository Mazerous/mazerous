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

  // Collapse navbar and show hamburger after animation
  navToggle.addEventListener("click", () => {
    navbar.classList.add("slide-out");
    setTimeout(() => {
      navbar.classList.add("collapsed");
      navbar.classList.remove("slide-out");
      hamburger.classList.add("show-hamburger");
    }, 300); // Match CSS animation duration
  });

  // Expand navbar and hide hamburger before animation
  hamburger.addEventListener("click", () => {
    hamburger.classList.remove("show-hamburger");
    navbar.classList.remove("collapsed");
    navbar.classList.add("slide-in");
    setTimeout(() => {
      navbar.classList.remove("slide-in");
    }, 300); // Match CSS animation duration
  });
});
