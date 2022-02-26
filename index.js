var inputValue = document.querySelector(".input-text");
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
  inputValue.value = 0;
  first = 0;
  second = 0;
});

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
  inputValue.value = Number(inputValue.value) + 0;
});

const one = document.querySelector(".one");
one.addEventListener("click", () => {
  inputValue.value = Number(inputValue.value) + 1;
});

const two = document.querySelector(".two");
two.addEventListener("click", () => {
  inputValue.value = Number(inputValue.value) + 2;
});

const three = document.querySelector(".three");
three.addEventListener("click", () => {
  //   inputValue.value = Number(inputValue.value);
  inputValue.value = Number(inputValue.value) + 3;
});

const four = document.querySelector(".four");
four.addEventListener("click", () => {
  inputValue.value = Number(inputValue.value) + 4;
});

const five = document.querySelector(".five");
five.addEventListener("click", () => {
  inputValue.value = Number(inputValue.value) + 5;
});

const six = document.querySelector(".six");
six.addEventListener("click", () => {
  inputValue.value = Number(inputValue.value) + 6;
});

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
  inputValue.value = Number(inputValue.value) + 7;
});
const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
  inputValue.value = Number(inputValue.value) + 8;
});
const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
  inputValue.value = Number(inputValue.value) + 9;
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  first = inputValue.value;
  inputValue.value = "";
  second = "+";
});

const minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  first = inputValue.value;
  inputValue.value = "";
  second = "-";
});

const multiply = document.querySelector(".multiply");
multiply.addEventListener("click", () => {
  first = inputValue.value;
  inputValue.value = "";
  second = "*";
});

const divide = document.querySelector(".divide");
divide.addEventListener("click", () => {
  first = inputValue.value;
  inputValue.value = "";
  second = "/";
});

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", () => {
  first = inputValue.value / 100;
  inputValue.value = "";
  second = "*";
});

const plusMinus = document.querySelector(".plus-minus-text");
plusMinus.addEventListener("click", () => {
  inputValue.value = -inputValue.value;
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", () => {
  inputValue.value += ".";
});

const equalto = document.querySelector(".equalto");
equalto.addEventListener("click", () => {
  try {
    result = eval(Number(first) + second + Number(inputValue.value));
    // if (result == undefined) {
    //   inputValue.value = Number("");
    // }
    inputValue.value = result;
    inputValue.value = Number(inputValue.value);
    console.log(inputValue.value);
  } catch (e) {
    inputValue.value = 0;
  }
});
