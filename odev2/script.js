//input değeri 1.8 ile carp alert olarak yaz
const price = document.getElementById("price");
const btnAlert = document.getElementById("btnAlert");

function clicked() {
  let val = price.value;
  isNaN(val) ? alert("Geçersiz deger") : alert(val * 1.8);
}

btnAlert.addEventListener("click", clicked);


//----------------------------------------------------------


//4 işlem
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const btnSum = document.getElementById("sum");
const btnMultiply = document.getElementById("multiply");
const btnDivide = document.getElementById("divide");
const btnMinus = document.getElementById("minus");

function sum() {
  const result = parseFloat(number1.value) + parseFloat(number2.value);
  alert(parseFloat(result.toFixed(5)));
}

function minus() {
  const result = parseFloat(number1.value) - parseFloat(number2.value);
  alert(parseFloat(result.toFixed(5)));
}

function divide() {
  const result = parseFloat(number1.value) / parseFloat(number2.value);
  alert(parseFloat(result.toFixed(5)));
}

function multiply() {
  const result = parseFloat(number1.value) * parseFloat(number2.value);
  alert(parseFloat(result.toFixed(5)));
}

btnSum.addEventListener("click", sum);
btnMinus.addEventListener("click", minus);
btnDivide.addEventListener("click", divide);
btnMultiply.addEventListener("click", multiply);
