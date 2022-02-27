var inputValue = document.querySelector(".input-text");
var text = document.querySelectorAll(".text");
var colorRed = document.querySelectorAll(".color-red");
var first = 0;
var second = 0;
// var arr = [];
// inputValue.addEventListener("keydown", (value) => {
//   arr.push(value.key);
// });
// console.log(arr);
// console.log(inputValue);

const AcText = document.querySelector(".ac-text");
AcText.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  AcText.style.backgroundColor = "#FFAC1C";
  inputValue.value = "";
  first = 0;
  second = 0;
});

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  zero.style.backgroundColor = "#FFAC1C";
  inputValue.value += 0;
});

const one = document.querySelector(".one");
one.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  one.style.backgroundColor = "#FFAC1C";
  inputValue.value += 1;
});

const two = document.querySelector(".two");
two.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  two.style.backgroundColor = "#FFAC1C";
  inputValue.value += 2;
});

const three = document.querySelector(".three");
three.addEventListener("click", () => {
  //   inputValue.value = Number(inputValue.value);
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  three.style.backgroundColor = "#FFAC1C";
  inputValue.value += 3;
});

const four = document.querySelector(".four");
four.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  four.style.backgroundColor = "#FFAC1C";
  inputValue.value += 4;
});

const five = document.querySelector(".five");
five.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  five.style.backgroundColor = "#FFAC1C";
  inputValue.value += 5;
});

const six = document.querySelector(".six");
six.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  six.style.backgroundColor = "#FFAC1C";
  inputValue.value += 6;
});

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  seven.style.backgroundColor = "#FFAC1C";
  inputValue.value += 7;
});
const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  eight.style.backgroundColor = "#FFAC1C";
  inputValue.value += 8;
});
const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  nine.style.backgroundColor = "#FFAC1C";
  inputValue.value += 9;
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  first = inputValue.value;
  inputValue.value = "";
  second = "+";
});

const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  first = inputValue.value;
  inputValue.value = "";
  second = "-";
});

const multiply = document.querySelector(".multiply");
multiply.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  first = inputValue.value;
  inputValue.value = "";
  second = "*";
});

const divide = document.querySelector(".divide");
divide.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  first = inputValue.value;
  inputValue.value = "";
  second = "/";
});

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  first = inputValue.value / 100;
  inputValue.value = "";
  second = "*";
});

const plusMinus = document.querySelector(".plus-minus-text");
plusMinus.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  plusMinus.style.backgroundColor = "#FFAC1C";
  inputValue.value = -inputValue.value;
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  inputValue.value += ".";
});

const equalto = document.querySelector(".equalto");
equalto.addEventListener("click", () => {
  for (let i = 0; i < text.length; i++) {
    text[i].style.backgroundColor = "#FFFFFF";
  }
  for (let i = 0; i < colorRed.length; i++) {
    colorRed[i].style.backgroundColor = "rgb(167, 42, 42)";
  }
  try {
    result = eval(first + second + inputValue.value);
    if (result == undefined) {
      result = "";
    }
    inputValue.value = result;
  } catch (e) {
    inputValue.value = 0;
  }
});
