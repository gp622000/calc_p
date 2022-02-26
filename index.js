const inputValue = document.querySelector(".input-text");
var arr = [];
inputValue.addEventListener("keydown", (value) => {
  arr.push(value.key);
});
console.log(arr);
// console.log(inputValue);
