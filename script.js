// script.js

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    launchFireworks();
    playHearts();
    document.getElementById('bgMusic').play();
  }, 3000);
};

function askForSalami() {
  alert("Tumi to dure... ami kivabe salami dibo? 😅 Bhalo theko ❤️");
}

function greetTrader() {
  const name = document.getElementById("traderName").value.trim();
  const msgDiv = document.getElementById("message");
  const extraDiv = document.getElementById("extra");
  if (name) {
    msgDiv.innerHTML = `🌙 Eid Mubarak <strong>${name}</strong>!<br>
    🎁 Allah may bless you with endless joy and barkat.<br>
    ❤️ Tumi ajke onek shundor lagcho!<br>
    😜 Salami paile onek khushi hobo!`;

    extraDiv.innerHTML = `🎉 আজকের দিনের জন্য তুমি আমার একমাত্র স্পেশাল গিফট।<br>
    🌸 ঈদ মোবারক, ${name}! আল্লাহ তোমার সব দোয়া কবুল করুক।<br>
    🤲 ঈদ মোবারাক! Eid Mubarak! عيد مبارك!`;
  } else {
    msgDiv.innerHTML = "Please enter your name first!";
    extraDiv.innerHTML = "";
  }
}

function previewPhoto(event) {
  const preview = document.getElementById("photoPreview");
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      preview.src = e.target.result;
      preview.style.display = "block";
    };
    reader.readAsDataURL(file);
  }
}

function toggleSound() {
  const music = document.getElementById("bgMusic");
  if (music.paused) music.play();
  else music.pause();
}

// Countdown
const eidDate = new Date("2025-06-07T00:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const diff = eidDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("countdown").innerHTML =
    `⏳ Eid Countdown: ${days} days, ${hours} hours remaining!`;
}, 1000);

// Fireworks 🎆
function launchFireworks() {
  const canvas = document.getElementById("fireworksCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  function drawFirework(x, y, radius, color) {
    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 2;
      const dx = Math.cos(angle) * speed;
      const dy = Math.sin(angle) * speed;
      const size = Math.random() * 3;

      const particle = { x, y, dx, dy, size, alpha: 1 };
      particles.push(particle);
    }
  }

  const particles = [];

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
      p.x += p.dx;
      p.y += p.dy;
      p.alpha -= 0.01;
      if (p.alpha <= 0) particles.splice(i, 1);
      ctx.fillStyle = `rgba(255, 100, 0, ${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(animate);
  }

  setInterval(() => {
    drawFirework(Math.random() * canvas.width, Math.random() * canvas.height, 2, "red");
  }, 600);

  animate();
}

// Hearts ❤️
function playHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 15 + 15 + "px";
    heart.textContent = "❤️";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 400);
}

