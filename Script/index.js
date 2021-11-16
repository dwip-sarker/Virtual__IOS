// DOM Selection.
let display = document.querySelector(".screen");
let appsArea = document.querySelector(".apps_area");
let calculator = document.querySelector(".calculator");
let jumpGame = document.querySelector(".jumping_game_area");

// Apps Inner Parts Selection.
let calculatorScreen = document.getElementById("screen");
let calculatorButtons = document.querySelectorAll(".cal_btn");

// Funtion for display on.
function displayOn() {
  display.style.cssText = `background: url(./wellpaper/wellpapr1.jpg); background-size: cover;`;
  appsArea.style.display = "flex";
  calculator.style.display = "none";
  jumpGame.style.display = "none";
}
// Function for display off.
function displayOff() {
  display.style.background = "black";
  appsArea.style.display = "none";
  calculator.style.display = "none";
  jumpGame.style.display = "none";
}
//Functon for run the game.
function jumGameStart() {
  appsArea.style.display = "none";
  jumpGame.style.display = "block";
}

//Function for run the colculator.
function calculatorStart() {
  appsArea.style.display = "none";
  calculator.style.display = "block";
  let screenValue = "";
  for (items of calculatorButtons) {
    items.addEventListener("click", (element) => {
      buttonText = element.target.innerText;

      if (buttonText === "x") {
        //This condition is for mucltipliction.
        buttonText = "*";
        screenValue += buttonText;
        calculatorScreen.value = screenValue;
      } else if (buttonText == "C") {
        //This conditons is for clear screen val.
        screenValue = "";
        calculatorScreen.value = screenValue;
      } else if (buttonText == "=") {
        //This condition is for get ansered.
        calculatorScreen.value = eval(screenValue);
      } else {
        //This condiston is for show the imported data.
        screenValue += buttonText;
        calculatorScreen.value = screenValue;
      }
    });
  }
}
