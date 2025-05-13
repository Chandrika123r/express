const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

noBtn.addEventListener("mouseover", () => {
  // Move the button randomly when mouse hovers over it
  const i = Math.floor(Math.random() * 300) + 1;
  const j = Math.floor(Math.random() * 300) + 1;

  noBtn.style.position = "absolute";
  noBtn.style.top = i + "px";
  noBtn.style.left = j + "px";
});

yesBtn.addEventListener("click", () => {
  alert("Yay! 💕 I knew you'd say yes Babe...!");
});
function LoveMusic() {
    const music = document.getElementById("bg-music");
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
  window.onload = () => {
    const music = document.getElementById("bg-music");
  
    // Check if the music started playing
    music.play().catch((error) => {
      console.log("Autoplay blocked. Please click the page to play music.");
      // Optionally, display a message to the user or handle the fallback
    });
  };
  
  // Generate multiple falling hearts dynamically
const heartContainer = document.querySelector(".hearts");

for (let i = 0; i < 20; i++) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
  heart.style.opacity = Math.random();
  heartContainer.appendChild(heart);
}
const canvas = document.getElementById("heart-canvas");
const ctx = canvas.getContext("2d");

let width = window.innerWidth;
let height = window.innerHeight;
canvas.width = width;
canvas.height = height;

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
});

function drawHeart(x, y, size, color) {
  ctx.save();
  ctx.beginPath();
  ctx.translate(x, y);
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-size / 2, -size / 2, -size, size / 3, 0, size);
  ctx.bezierCurveTo(size, size / 3, size / 2, -size / 2, 0, 0);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.restore();
}

class Heart {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * width;
    this.y = Math.random() * -height;
    this.size = Math.random() * 20 + 10;
    this.speed = Math.random() * 1 + 0.5;
    this.opacity = Math.random() * 0.6 + 0.4;
    this.color = `rgba(255, 0, 100, ${this.opacity})`;
  }

  update() {
    this.y += this.speed;
    if (this.y > height + 10) this.reset();
  }

  draw() {
    drawHeart(this.x, this.y, this.size, this.color);
  }
}

const hearts = Array.from({ length: 80 }, () => new Heart());

function animate() {
  ctx.clearRect(0, 0, width, height);
  hearts.forEach((heart) => {
    heart.update();
    heart.draw();
  });
  requestAnimationFrame(animate);
}

animate();
window.onload = () => {
    const popup = document.getElementById("love-letter-popup");
    popup.style.display = "flex"; // Show the popup when the page loads
  
    // Close the popup when the "X" button is clicked
    const closeButton = document.getElementById("close-popup");
    closeButton.onclick = () => {
      popup.style.display = "none"; // Hide the popup
    };
  
    // Optionally, close the popup if the user clicks outside of the popup content
    window.onclick = (event) => {
      if (event.target === popup) {
        popup.style.display = "none"; // Close on outside click
      }
    };
  };
  