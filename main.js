document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.getElementById("enter-button");
  const enterPanel = document.getElementById("enter-panel");
  const navToggle = document.getElementById("nav-toggle");
  const navbar = document.querySelector(".navbar");
  const logoToggle = document.getElementById("nav-logo");

  // Hide enter panel on click
  enterButton.addEventListener("click", () => {
    enterPanel.style.opacity = "0";
    enterPanel.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
      enterPanel.style.display = "none";
    }, 600);
  });

  // Collapse navbar and fade in logo toggle
  navToggle.addEventListener("click", () => {
    navbar.classList.add("collapsed");
    setTimeout(() => {
      logoToggle.classList.add("show");
    }, 600); // Wait for navbar collapse to finish
  });

  // Expand navbar and fade out logo toggle
  logoToggle.addEventListener("click", () => {
    logoToggle.classList.remove("show");
    setTimeout(() => {
      navbar.classList.remove("collapsed");
    }, 100); // Start expanding navbar shortly after logo fade starts
  });
});
