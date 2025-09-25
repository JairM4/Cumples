// Referencias
const intro = document.getElementById("intro");
const hearts = document.getElementById("hearts");
const main = document.getElementById("main");

const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");

let autoNextTimeout;

// Al iniciar (pantalla intro)
startBtn.addEventListener("click", () => {
  intro.classList.remove("active");
  intro.classList.add("hidden");
  hearts.classList.remove("hidden");
  hearts.classList.add("active");

  // Si no presiona el botón, después de 15s pasa solo
  autoNextTimeout = setTimeout(() => {
    goToMain();
  }, 15000);
});

// Botón continuar
continueBtn.addEventListener("click", () => {
  clearTimeout(autoNextTimeout);
  goToMain();
});

// Función para ir a la pantalla principal
function goToMain() {
  hearts.classList.remove("active");
  hearts.classList.add("hidden");
  main.classList.remove("hidden");
  main.classList.add("active");
  startCarousel();
}

// Carrusel de fotos
let slideIndex = 0;

function startCarousel() {
  showSlides();
}

function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1; }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 4000); // cambia cada 4s
}
// Cuando presiona el botón "Comenzar"
document.getElementById("startBtn").addEventListener("click", () => {
  const audio = document.getElementById("Resources/music.mp3");
  audio.play().catch(error => {
    console.log("Error al reproducir música:", error);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("musicaFondo");
  const startBtn = document.getElementById("startBtn");

  // Caso 1: Karen hace clic en el botón
  startBtn.addEventListener("click", () => {
    audio.play().catch(err => console.log("Bloqueado por navegador:", err));
  });

  // Caso 2: si pasan 15 segundos y se activa automáticamente la sorpresa
  setTimeout(() => {
    audio.play().catch(err => console.log("Bloqueado por navegador:", err));
  }, 15000);
});
function crearCorazon() {
  const container = document.getElementById("heart-container");
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️"; // también puedes usar 💕 💖 💓
  heart.style.left = Math.random() * 100 + "vw"; // posición aleatoria
  heart.style.fontSize = Math.random() * 20 + 15 + "px"; // tamaño aleatorio
  container.appendChild(heart);

  // eliminar después de 6s
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Generar corazones cada 400ms
setInterval(crearCorazon, 400);
