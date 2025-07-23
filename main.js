document.addEventListener("DOMContentLoaded", function () {
  const enterButton = document.getElementById("enter-button");
  const enterPanel = document.getElementById("enter-panel");
  const navToggle = document.getElementById("nav-toggle");
  const navbar = document.querySelector(".navbar");
  const logoToggle = document.getElementById("nav-logo");
  const audio = document.getElementById("background-audio");
  const toggleAudioBtn = document.getElementById("toggle-audio");
  const leftSide = document.querySelector('.left-side');
  const rightSide = document.querySelector('.right-side');

  let audioContext, analyser, source, dataArray;
  let isPlaying = true;

  // Hide enter panel
  enterButton.addEventListener("click", () => {
    enterPanel.style.opacity = "0";
    enterPanel.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
      enterPanel.style.display = "none";
    }, 600);
  });

  // Navbar collapse/expand logic
  navToggle.addEventListener("click", () => {
    navbar.classList.add("collapsed");
    setTimeout(() => {
      logoToggle.classList.add("show-logo");
    }, 600);
  });

  logoToggle.addEventListener("click", () => {
    logoToggle.classList.remove("show-logo");
    setTimeout(() => {
      navbar.classList.remove("collapsed");
    }, 100);
  });

  // Setup and play audio from 16s on page load
  audio.currentTime = 16;
  audio.volume = 0.5;
  audio.play().then(() => {
    setupAudioAnalysis();
  }).catch(e => {
    console.log("Autoplay blocked. User must interact to start audio.");
  });

  // Toggle audio on button click
  toggleAudioBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      toggleAudioBtn.textContent = "Pause Music";
      isPlaying = true;
    } else {
      audio.pause();
      toggleAudioBtn.textContent = "Play Music";
      isPlaying = false;
    }
  });

  // Audio analysis for pulse effect
  function setupAudioAnalysis() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
    source = audioContext.createMediaElementSource(audio);
    analyser = audioContext.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    source.connect(analyser);
    analyser.connect(audioContext.destination);

    animatePulse();
  }

  function animatePulse() {
    requestAnimationFrame(animatePulse);
    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);
    let bass = dataArray.slice(0, 10).reduce((sum, val) => sum + val, 0) / 10;

    if (bass > 100) {
      leftSide.classList.add("pulse");
      rightSide.classList.add("pulse");
      setTimeout(() => {
        leftSide.classList.remove("pulse");
        rightSide.classList.remove("pulse");
      }, 100);
    }
  }
});

