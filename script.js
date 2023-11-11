const cells__binary = document.querySelectorAll(".cells__binary");
const cells__decimal = document.querySelectorAll(".cells__decimal");
const cells__hexadecimal = document.querySelectorAll(".cells__hexadecimal");

const binary__label = document.querySelector(".binary__label");
const decimal__label = document.querySelector(".decimal__label");
const hexadecimal__label = document.querySelector(".hexadecimal__label");

let currentNumber = 0;

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}

// let number = dec2bin(currentNumber).split(""); // number.length;
// while (number.length < 10) number.unshift("0");
// binary__label.textContent = number.join("") + " " + number.length;
// number.reverse();
// if (number[9] == 1)
//   cells__binary[9].style.backgroundColor = "var(--second-color)";

function generateCurrentBinaryNumber() {
  let number = dec2bin(currentNumber).split(""); // number.length;
  while (number.length < 10) number.unshift("0");
  binary__label.textContent = number.join("");
  number.reverse();
  for (let i = 0; i < number.length; i++) {
    console.log("i=" + i + " number[i]=" + number[i]);
    if (number[i] == 1)
      cells__binary[i].style.backgroundColor = "var(--second-color)";
    else cells__binary[i].style.backgroundColor = "transparent";
  }
}

function generateCurrentDecimalNumber() {
  let a1000 = (currentNumber - (currentNumber % 1000)) / 1000;
  let a100 = ((currentNumber % 1000) - (currentNumber % 100)) / 100;
  let a10 = ((currentNumber % 100) - (currentNumber % 10)) / 10;
  let a1 = currentNumber % 10;
  decimal__label.textContent = a1000 + " " + a100 + " " + a10 + " " + a1;

  cells__decimal.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
  for (let i = 0; i < a1; i++) {
    cells__decimal[i].style.backgroundColor = "var(--second-color)";
  }
  for (let i = 9; i < a10 + 9; i++) {
    cells__decimal[i].style.backgroundColor = "var(--second-color)";
  }
  for (let i = 18; i < a100 + 18; i++) {
    cells__decimal[i].style.backgroundColor = "var(--second-color)";
  }
  for (let i = 27; i < a1000 + 27; i++) {
    cells__decimal[i].style.backgroundColor = "var(--second-color)";
  }
}

function numberToLetterInHex(x) {
  tab = "ABCDEF".split("");
  if (x > 9) return tab[x - 10];
  else return x;
}

function generateCurrentHexadecimalNumber() {
  let h256 = (currentNumber - (currentNumber % 256)) / 256;
  let h16 = ((currentNumber % 256) - (currentNumber % 16)) / 16;
  let h1 = currentNumber % 16;
  hexadecimal__label.textContent =
    numberToLetterInHex(h256) +
    " " +
    numberToLetterInHex(h16) +
    " " +
    numberToLetterInHex(h1);
  cells__hexadecimal.forEach((el) => {
    el.style.backgroundColor = "transparent";
  });
  for (let i = 0; i < h1; i++) {
    cells__hexadecimal[i].style.backgroundColor = "var(--second-color)";
  }
  for (let i = 15; i < h16 + 15; i++) {
    cells__hexadecimal[i].style.backgroundColor = "var(--second-color)";
  }
  for (let i = 30; i < h256 + 30; i++) {
    cells__hexadecimal[i].style.backgroundColor = "var(--second-color)";
  }
}

function Start() {
  generateCurrentBinaryNumber();
  generateCurrentDecimalNumber();
  generateCurrentHexadecimalNumber();
  if (currentNumber == 1023) clearInterval(intervall);
  currentNumber++;
}

let intervall = setInterval(() => {
  Start();
}, 1000);
Start();

// cells__binary[0].style.backgroundColor = "var(--second-color)";
// cells__decimal[0].style.backgroundColor = "var(--second-color)";
// cells__hexadecimal[0].style.backgroundColor = "var(--second-color)";

// cells__binary[9].style.backgroundColor = "var(--second-color)";
// cells__decimal[8].style.backgroundColor = "var(--second-color)";
// cells__hexadecimal[14].style.backgroundColor = "var(--second-color)";
