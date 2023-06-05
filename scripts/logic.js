import { data } from "./data.js";

// const input = "this is a sentence with numbers 1 2 3 4, 5";
// let inputArray = [];

// turn input string into an array
export const stringToArray = (input, sepataror) => {
  return input.toUpperCase().split(sepataror);
};

// check if input has any unhandled characters
export const validChars = (array, object) => {
  return array.every((element) => object.hasOwnProperty(element));
};

// convert string to morse code
export const convertToMorse = (array) => {
  return array
    .map((letter) => {
      return data[letter.toUpperCase()];
    })
    .join(" ");
};

export const convertFromMorse = (array, obj) => {
  const reversed = Object.entries(obj).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
  }, {});

  return array
    .map((letter) => {
      return reversed[letter];
    })
    .join("");
};

export const validMorse = (array) => {
  const chars = [".", "-", "/", " "];
  const morseLetter = array.join("").split("");
  return morseLetter.every((element) => chars.includes(element));
};
