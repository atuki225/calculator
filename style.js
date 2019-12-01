let value = "none";
let numberA = "none";
let numberB = "none";
let numberC = "none";
let dotCountA = 0;
let dotCountB = 0;

const cancel = document.getElementById("cancel");
const equal = document.getElementById("equal");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const number3 = document.getElementById("number3");
const number4 = document.getElementById("number4");
const number5 = document.getElementById("number5");
const number6 = document.getElementById("number6");
const number7 = document.getElementById("number7");
const number8 = document.getElementById("number8");
const number9 = document.getElementById("number9");
const number0 = document.getElementById("number0");
const number00 = document.getElementById("number00");
const dot = document.getElementById("dot");
const output = document.getElementById("output");

cancel.addEventListener('click',() => {
  value = "none";
  numberA = "none";
  numberB = "none";
  numberC = "none";
  output.textContent = 0;
});

equal.addEventListener('click',() => {
  if (numberB === "+") {
    let numberAA = parseInt(numberA);
    let numberCC = parseInt(numberC);
    value = numberAA + numberCC;
  }
  else if (numberB === "-") {
    value = numberA - numberC;
  }
  else if (numberB === "×") {
    value = numberA * numberC;
  }
  else if (numberB === "÷") {
    value = numberA / numberC;
  }
  output.textContent = value;
  numberA = value;
  numberB = "none";
  numberC = "none";
  value = "none";
});

plus.addEventListener('click',() => {
  if (value === "none" && numberC !== "none") {
    output.textContent = "要素は２つまでです。";
  }
  else if (numberA === "none" || numberB !== "none") {
    output.textContent = "ERROR";
  }
  else if (value === "none") {
    numberB = "+";
    output.textContent = numberA + "+";
  }
});

minus.addEventListener('click',() => {
  if (value === "none" && numberC !== "none") {
    output.textContent = "要素は２つまでです。";
  }
  else if (numberB !== "none") {
    output.textContent = "ERROR";
  }
  else if (numberA === "none") {
    numberA = "-";
    output.textContent ="-";
  }
  else if (value === "none") {
    numberB = "-";
    output.textContent = numberA + "-";
  }
});

times.addEventListener('click',() => {
  if (value === "none" && numberC !== "none") {
    output.textContent = "要素は２つまでです。";
  }
  else if (numberA === "none" || numberB !== "none") {
    output.textContent = "ERROR";
  }
  else if (value === "none") {
    numberB = "×";
    output.textContent = numberA + "×";
  }
});

divided.addEventListener('click',() => {
  if (value === "none" && numberC !== "none") {
    output.textContent = "要素は２つまでです。";
  }
  else if (numberA === "none" || numberB !== "none") {
    output.textContent = "ERROR";
  }
  else if (value === "none") {
    numberB = "÷";
    output.textContent = numberA + "÷";
  }
});

const numberFunction = function (num) {
  if (numberA === "none" || numberA === 0) {
    numberA = num;
    output.textContent = numberA;
  }
  else if (numberB === "none"){
    numberA = numberA + `${num}`;
    output.textContent = numberA;
  }
  else if(numberC === "none" || numberC === 0) {
    numberC = num;
    output.textContent = numberA + numberB + numberC;
  }
  else {
    numberC = numberC + `${num}`;
    output.textContent = numberA + numberB + numberC;
  }
}

const zero = function(num) {
  if (numberA === "none" || numberA === 0) {
    numberA = 0;
    output.textContent = numberA;
  }
  else if (numberB === "none"){
    numberA = numberA + `${num}`;
    output.textContent = numberA;
  }
  else if(numberC === "none" || numberC === 0) {
    numberC = 0;
    output.textContent = numberA + numberB + numberC;
  }
  else {
    numberC = numberC + `${num}`;
    output.textContent = numberA + numberB + numberC;
  }
}

number1.addEventListener('click',() => {
  numberFunction(1);
});

number2.addEventListener('click',() => {
  numberFunction(2);
});

number3.addEventListener('click',() => {
  numberFunction(3);
});

number4.addEventListener('click',() => {
  numberFunction(4);
});

number5.addEventListener('click',() => {
  numberFunction(5);
});

number6.addEventListener('click',() => {
  numberFunction(6);
});

number7.addEventListener('click',() => {
  numberFunction(7);
});

number8.addEventListener('click',() => {
  numberFunction(8);
});

number9.addEventListener('click',() => {
  numberFunction(9);
});

number0.addEventListener('click',() => {
  zero(0);
});

number00.addEventListener('click',() => {
  zero("00");
});

dot.addEventListener('click',() => {
  if (dotCountA === 0 && numberB === "none") {
    numberA = numberA + ".";
    output.textContent = numberA;
    dotCountA = 1;
  }
  else if (dotCountB === 0 && numberB !== "none") {
    numberC = numberC + ".";
      output.textContent = numberA + numberB + numberC;
      dotCountB = 1;
  }
});


