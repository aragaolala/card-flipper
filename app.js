const colorChange = document.getElementById("change-btn");
const nameTextColor = document.getElementById("change-text");
const body = document.body;

function randomColor() {
  return Math.floor(Math.random() * 256);
}

colorChange.addEventListener("click", bgColor);

function bgColor() {
  const color1 = randomColor();
  const color2 = randomColor();
  const color3 = randomColor();

  const rgbString = `rgb(${color1},${color2},${color3})`;

  body.style.background = rgbString;
  nameTextColor.innerText = rgbString;
}
