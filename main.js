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

// --- Audio Beat Pulse Setup ---
let audio = new Audio('your-audio-file.mp3'); // Replace with your file path
let audioContext, analyser, source, dataArray;
let isPlaying = false;

const leftSide = document.querySelector('.left-side');
const rightSide = document.querySelector('.right-side');
const toggleBtn = document.createElement('button');

toggleBtn.textContent = "Play Music";
toggleBtn.className = "audio-toggle";
document.body.appendChild(toggleBtn);

// Button click to play/pause music
toggleBtn.addEventListener("click", () => {
  if (!audioContext) setupAudioAnalysis();

  if (isPlaying) {
    audio.pause();
    toggleBtn.textContent = "Play Music";
  } else {
    if (audio.currentTime < 16) {
      audio.currentTime = 16; // Start at 16 seconds
    }
    audio.play();
    toggleBtn.textContent = "Pause Music";
  }

  isPlaying = !isPlaying;
});

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

  let scale = 1 + bass / 255 * 0.2; // Max scale 1.2
  leftSide.style.transform = `scale(${scale})`;
  rightSide.style.transform = `scale(${scale})`;
}

