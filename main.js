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
  let isPlaying = false;
  let lastPulseTime = 0;
  const pulseCooldown = 400; // milliseconds between allowed pulses

  // Function: Setup Audio Analysis for Pulse
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

  // Function: Animate Pulse Based on Low Bass with cooldown
  function animatePulse() {
    requestAnimationFrame(animatePulse);
    if (!analyser) return;

    analyser.getByteFrequencyData(dataArray);
    const lowBass = dataArray.slice(0, 5); // Deep bass frequencies
    const avg = lowBass.reduce((sum, val) => sum + val, 0) / lowBass.length;

    const now = performance.now();
    if (avg > 130 && now - lastPulseTime > pulseCooldown) {
      lastPulseTime = now;
      leftSide.classList.add("pulse");
      rightSide.classList.add("pulse");
      setTimeout(() => {
        leftSide.classList.remove("pulse");
        rightSide.classList.remove("pulse");
      }, 100);
    }
  }

  // Event: Enter Button
  enterButton.addEventListener("click", () => {
    enterPanel.style.opacity = "0";
    enterPanel.style.transition = "opacity 0.6s ease";
    setTimeout(() => {
      enterPanel.style.display = "none";
    }, 600);

    // Begin music playback and analysis
    try {
      audio.currentTime = 50;
      audio.volume = 0.5;
      audio.play();
      setupAudioAnalysis();
      toggleAudioBtn.textContent = "Pause Music";
      isPlaying = true;
    } catch (err) {
      console.log("Autoplay prevented until user interacts.");
    }
  });

  // Navbar collapse and logo show
  navToggle.addEventListener("click", () => {
    navbar.classList.add("collapsed");
    setTimeout(() => {
      logoToggle.classList.add("show-logo");
    }, 600);
  });

  // Navbar expand and logo hide
  logoToggle.addEventListener("click", () => {
    logoToggle.classList.remove("show-logo");
    setTimeout(() => {
      navbar.classList.remove("collapsed");
    }, 100);
  });

  // Toggle audio button (bottom right)
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
});
