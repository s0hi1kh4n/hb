import React, { useRef } from "react";
import "./ShinyRose.css";

const ShinyRose = () => {
  const containerRef = useRef(null);
  const createHeart = () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️🎂❤️";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = "-10px";
    heart.style.fontSize = `${Math.random() * 20 + 10}px`;
    containerRef.current.appendChild(heart);
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

  return (
    <div
      className="rose-container"
      ref={containerRef}
      onMouseEnter={startHeartRain}
    >
      <svg
        className="rose-svg"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 300"
      >
        <path
          className="rose-petal"
          fill="red"
          d="M100,30 C130,10 170,40 150,80 C140,100 110,120 100,130 C90,120 60,100 50,80 C30,40 70,10 100,30"
        />
        <path
          className="rose-petal"
          fill="darkred"
          d="M100,40 C120,20 150,50 140,80 C130,100 110,110 100,120 C90,110 70,100 60,80 C50,50 80,20 100,40"
        />
        <rect
          x="95"
          y="120"
          width="10"
          height="150"
          fill="green"
          className="rose-stem"
        />
        <ellipse
          cx="70"
          cy="160"
          rx="25"
          ry="15"
          fill="green"
          className="rose-leaf"
        />
        <ellipse
          cx="130"
          cy="160"
          rx="25"
          ry="15"
          fill="green"
          className="rose-leaf"
        />
      </svg>
      <p className="vText">Happy Birthday Ely</p>
    </div>
  );
};

export default ShinyRose;
