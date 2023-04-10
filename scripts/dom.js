import {
  stringToArray,
  validChars,
  convertToMorse,
  convertFromMorse,
  validMorse,
} from "./logic.js";
import { aToZ } from "./data.js";

const inputArea = document.querySelector("#inputArea");
const img = document.querySelector("img");
let morseOutput = false;
const clearBtn = document.getElementById("clearBtn");
const translateBtn = document.getElementById("translateBtn");
const inputLan = document.getElementById("inputLan");
const heading = document.querySelector(".heading");

img.addEventListener("click", (event) => {
  if (morseOutput) {
    img.src = "./assets/reverse.svg";
    inputLan.innerText = "Text";
    heading.style.width = "90px";
  } else {
    img.src = "./assets/reverse-f.svg";
    inputLan.innerText = "Morse";
    heading.style.width = "110px";
  }
  morseOutput = !morseOutput;
});

const createOutput = (text) => {
  const outputArea = document.getElementById("outputArea");
  outputArea.value = text;
};

translateBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = inputArea.value;
  let inputArray = [];

  if (!morseOutput) {
    inputArray = stringToArray(inputValue, "");

    validChars(inputArray, aToZ)
      ? createOutput(convertToMorse(inputArray))
      : createOutput(
          "Unable to translate, view Morse Code Chart for supported characters."
        );
  } else {
    inputArray = stringToArray(inputValue, " ");
    console.log((inputArray = stringToArray(inputValue, " ")));
    validMorse(inputArray)
      ? createOutput(convertFromMorse(inputArray, aToZ))
      : createOutput(
          "Unable to translate, view Morse Code Chart for supported characters."
        );
  }

  clearBtn.addEventListener("click", (event) => {
    event.preventDefault();
    inputArea.value = "";
    outputArea.value = "";
  });
});
