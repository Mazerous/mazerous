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
  const collapseBtn = document.querySelector(".collapse-button");
  const hamburgerBtn = document.querySelector(".hamburger-button");
  const navList = document.querySelector(".nav-list");
  const navbar = document.querySelector(".navbar");

  if (collapseBtn && hamburgerBtn && navList && navbar) {
    collapseBtn.addEventListener("click", () => {
      navbar.classList.add("collapsed");
    });

    hamburgerBtn.addEventListener("click", () => {
      navbar.classList.remove("collapsed");
    });
  }
});
