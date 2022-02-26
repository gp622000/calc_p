var inputValue = document.querySelector(".input-text");
var firstValue = "";
// var arr = [];
// inputValue.addEventListener("keydown", (value) => {
//   arr.push(value.key);
// });
// console.log(arr);
// console.log(inputValue);

const AcText = document.querySelector(".ac-text");
AcText.addEventListener("click", () => {
  inputValue.value = "";
});

const zero = document.querySelector(".zero");
zero.addEventListener("click", () => {
  inputValue.value += 0;
});

const one = document.querySelector(".one");
one.addEventListener("click", () => {
  inputValue.value += 1;
});

const two = document.querySelector(".two");
two.addEventListener("click", () => {
  inputValue.value += 2;
});

const three = document.querySelector(".three");
three.addEventListener("click", () => {
  inputValue.value += 3;
});

const four = document.querySelector(".four");
four.addEventListener("click", () => {
  inputValue.value += 4;
});

const five = document.querySelector(".five");
five.addEventListener("click", () => {
  inputValue.value += 5;
});

const six = document.querySelector(".six");
six.addEventListener("click", () => {
  inputValue.value += 6;
});

const seven = document.querySelector(".seven");
seven.addEventListener("click", () => {
  inputValue.value += 7;
});
const eight = document.querySelector(".eight");
eight.addEventListener("click", () => {
  inputValue.value += 8;
});
const nine = document.querySelector(".nine");
nine.addEventListener("click", () => {
  inputValue.value += 9;
});

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => {
  first = inputValue.value;
  inputValue.value = "";
});

const equalto = document.querySelector(".equalto");
equalto.addEventListener("click", () => {
  result = eval(Number(first) + Number(inputValue.value));
  inputValue.value = result;
});
