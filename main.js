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

  if (navToggle && navbar) {
    navToggle.addEventListener("click", () => {
      navbar.classList.toggle("collapsed");
    });
  }
});
