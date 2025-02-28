const container = document.getElementById("rose-container");

const createHeart = () => {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️🎂❤️";
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.top = "-10px";
  heart.style.fontSize = `${Math.random() * 20 + 10}px`;
  container.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 3000);
};

const startHeartRain = () => {
  const interval = setInterval(createHeart, 200);
  setTimeout(() => {
    clearInterval(interval);
  }, 3000);
};

container.addEventListener("mouseenter", startHeartRain);
