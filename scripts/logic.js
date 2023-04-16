import { aToZ } from "./data.js";

const input = "this is a sentence with numbers 1 2 3 4, 5";
let inputArray = [];

// turn input string into an array
export const stringToArray = (input, sepataror) => {
  return input.toUpperCase().split(sepataror);
};

// check if input has any unhandled characters
export const validChars = (array, object) => {
  return array.every(
    (element) => element === " " || object.hasOwnProperty(element)
  );
};

// convert string to morse code
export const convertToMorse = (array) => {
  // let outputMc = "";
  // for (const letter of array) {
  //   if (letter) {
  //     if (letter === " ") {
  //       outputMc += "/ ";
  //     } else {
  //       for (const [key, value] of Object.entries(aToZ)) {
  //         if (letter.toUpperCase() === key) {
  //           outputMc += value + " ";
  //         }
  //       }
  //     }
  //   }
  // }
  // return outputMc.trim();

  return array
    .map((letter) => {
      return aToZ[letter.toUpperCase()];
    })
    .join(" ");
};

// inputArray = stringToArray(input, "");

export const convertFromMorse = (array, aToZ) => {
  const reversed = Object.entries(aToZ).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});

  return array
    .map((morse) => {
      return reversed[morse];
    })
    .join("");
};

export const validMorse = (array) => {
  const chars = [".", "-", "/", " "];
  const morseLetter = array.join("").split("");
  return morseLetter.every((element) => chars.includes(element));
};
