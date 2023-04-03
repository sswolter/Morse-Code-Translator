// console.log("logic script linked");

const aToZ = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

console.log(aToZ);

// english to morse code
const inputEn = "hello";
const inputEnArray = inputEn.split("");
let outputMc = "";

for (const letter of inputEnArray) {
  //   console.log(letter);
  for (const [key, value] of Object.entries(aToZ)) {
    //   console.log(key, value);
    if (letter.toUpperCase() === key) {
      outputMc += value + " ";
    }
  }

  if (letter === " ") {
    outputMc += "/";
  }
}

console.log(outputMc.trim());

// morse code to english
const inputMc = ".... . .-.. .-.. --- / ---";
const inputMcArray = inputMc.split(" ");
let outputEn = "";
// console.log(inputMcArray);

for (const code of inputMcArray) {
  //   console.log(code);

  for (const [key, value] of Object.entries(aToZ)) {
    if (code === value) {
      outputEn += key;
    }
  }

  if (code === "/") {
    outputEn += " ";
  }
}

console.log(outputEn.trim().toLowerCase());
