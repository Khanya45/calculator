const screen = document.querySelector(".screen");

const buttons = document.querySelectorAll("button");

buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});

function calculate(event) {
  const clicked = event.target.value;

  if (clicked === "=") {
    if (screen.value !== "") {
      screen.value = eval(screen.value);
    }
  } else if (clicked === "c") {
    screen.value = "";
  } else if (clicked === "X") {
    screen.value = screen.value.slice(0, -1);
  } else {
    screen.value += clicked;
  }
}

// function Clear() {}
// function Delete() {}
// function Check(event) {
//   const btn = document.querySelector(".main");
//   if (event.target.btn.contains("btnClear")) {
//     if (screen.value === "c") {
//       screen.value = "";
//     }
//   }
// }
