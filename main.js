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

  // Hide navbar (fade out) and show logo (fade in)
  navToggle.addEventListener("click", () => {
    navbar.classList.add("hidden");
    setTimeout(() => {
      logoToggle.classList.add("show");
    }, 400); // Match CSS transition duration
  });

  // Show navbar (fade in) and hide logo (fade out)
  logoToggle.addEventListener("click", () => {
    logoToggle.classList.remove("show");
    setTimeout(() => {
      navbar.classList.remove("hidden");
    }, 100); // Small delay for smooth transition
  });
});
