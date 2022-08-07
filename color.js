const clockBody = document.querySelector(".clock");

function changeBlue() { clockBody.className = "clock blue"; }
function changeGreen() { clockBody.className = "clock green"; }
function changeYellow() { clockBody.className = "clock yellow"; }
function changeRed() { clockBody.className = "clock red"; }
function changePurple() { clockBody.className = "clock purple"; }

let changeColor = [changeBlue, changeGreen, changeYellow, changeRed, changePurple]

function changeColorAction() {
  changeColor[Math.floor(Math.random() * changeColor.length)]();
}

changeColorAction();
setInterval(changeColorAction, 1000);


