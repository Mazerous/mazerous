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

  // Collapse navbar on arrow click
  navToggle.addEventListener("click", () => {
    navbar.style.display = "none";
    hamburger.style.display = "block";
  });

  // Expand navbar on hamburger click
  hamburger.addEventListener("click", () => {
    navbar.style.display = "flex";
    hamburger.style.display = "none";
  });
});
