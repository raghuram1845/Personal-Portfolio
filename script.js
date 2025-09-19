// Add fade-in animation for project cards
document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < window.innerHeight - 50) {
        card.classList.add("visible");
      }
    });
  });
});

// Typing effect
const typedText = document.getElementById("typed");
const words = ["Full Stack Developer", "AI & ML Enthusiast", "Tech Explorer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[i];

  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, j--);
    if (j < 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, 50);
    }
  } else {
    typedText.textContent = currentWord.substring(0, j++);
    if (j > currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else {
      setTimeout(typeEffect, 100);
    }
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);
