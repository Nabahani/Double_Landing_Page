const containerEl = document.querySelector(".container");
const leftSide = document.querySelector(".left");
const rightSide = document.querySelector(".right");

leftSide.addEventListener("mouseenter", () => {
    containerEl.classList.add("active-left");
})

leftSide.addEventListener("mouseleave", () => {
    containerEl.classList.remove("active-left");
})

rightSide.addEventListener("mouseenter", () => {
    containerEl.classList.add("active-right");
})

rightSide.addEventListener("mouseleave", () => {
    containerEl.classList.remove("active-right");
})