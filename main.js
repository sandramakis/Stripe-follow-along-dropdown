"use strict";

const triggers = document.querySelectorAll(".cool li");
const background = document.querySelector(".dropdown-background");
console.log(background);

const nav = document.querySelectorAll("nav");

// when hovered on
function handleEnter() {
  this.classList.add("trigger-enter");

  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty("width", "300px");
  background.style.setProperty("height", "500px");
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px,${coords.top}px)`
  );
}

// when hovered out
function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

// EVENT HANDLERS
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
