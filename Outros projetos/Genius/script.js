// DOM CAPTURES
const startBtn = document.getElementById("start-btn");
const colorButtons = document.querySelectorAll(".color-button");
const newGameText = document.getElementById("new-game-text");

let isGameOn = false;
let colorSequenceLength = 1;
const randomizedColorsArray = [];

const pickRandomColorButton = () =>
  colorButtons[Math.floor(Math.random() * colorButtons.length)];

const generateColorSequence = () =>
  randomizedColorsArray.push(pickRandomColorButton());

const illuminateButtons = () => {
  setTimeout(() => {
    newGameText.textContent = "3";
  }, 200);
  setTimeout(() => {
    newGameText.textContent = "2";
  }, 400);
  setTimeout(() => {
    newGameText.textContent = "1";
  }, 600);
  setTimeout(() => {
    newGameText.textContent = "";
  }, 800);
  randomizedColorsArray.forEach((button) => {
    setTimeout(() => {
      button.classList.add("change-opacity");
    }, 1200);

    setTimeout(function () {
      button.classList.remove("change-opacity");
    }, 1700);
  });
};

const newGame = () => {
  // newGameText.style.display = 'none';
  isGameOn = true;
  generateColorSequence();
  illuminateButtons();
  console.log(randomizedColorsArray);
  colorButtons.forEach((colorButton) => {
    colorButton.addEventListener("click", (event) => {
      console.log(event.target);
    });
  });
};

startBtn.addEventListener("click", newGame);
