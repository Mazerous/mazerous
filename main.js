document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.getElementById("enter-button");
  const enterPanel = document.getElementById("enter-panel");

  // Hide enter panel on click
  enterButton.addEventListener("click", () => {
    enterPanel.style.opacity = "0";
    enterPanel.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
      enterPanel.style.display = "none";
    }, 600);
  });

  // Navbar toggle functionality
  const navToggle = document.getElementById("nav-toggle");
  const navbar = document.querySelector(".navbar");
  const hamburgerBox = document.createElement("div");

  hamburgerBox.className = "hamburger-box";
  hamburgerBox.innerHTML = "&#9776;"; // Unicode hamburger menu
  document.body.appendChild(hamburgerBox);
  hamburgerBox.style.display = "none";

  // Collapse navbar
  navToggle?.addEventListener("click", () => {
    navbar.style.display = "none";
    hamburgerBox.style.display = "flex";
  });

  // Expand navbar
  hamburgerBox.addEventListener("click", () => {
    navbar.style.display = "flex";
    hamburgerBox.style.display = "none";
  });
});
