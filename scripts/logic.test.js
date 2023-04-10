import {
  convertFromMorse,
  convertToMorse,
  stringToArray,
  validChars,
  validMorse,
} from "./logic.js";
import { aToZ } from "./data.js";

describe("test cases for a function that translates english to morse code", () => {
  it("should convert a string into an array", () => {
    expect(stringToArray("word", "")).toStrictEqual(["W", "O", "R", "D"]);
    expect(stringToArray("this is a sentence", "")).toStrictEqual([
      "T",
      "H",
      "I",
      "S",
      " ",
      "I",
      "S",
      " ",
      "A",
      " ",
      "S",
      "E",
      "N",
      "T",
      "E",
      "N",
      "C",
      "E",
    ]);
    expect(stringToArray(".-- --- .-. -..", " ")).toStrictEqual([
      ".--",
      "---",
      ".-.",
      "-..",
    ]);
    expect(
      stringToArray("- .... .. ... / .. ... / .- / ... . -. - . -. -.-. .", " ")
    ).toStrictEqual([
      "-",
      "....",
      "..",
      "...",
      "/",
      "..",
      "...",
      "/",
      ".-",
      "/",
      "...",
      ".",
      "-.",
      "-",
      ".",
      "-.",
      "-.-.",
      ".",
    ]);
  });

  it("should check input for valid input characters", () => {
    expect(validChars(["W", "O", "R", "D"], aToZ)).toEqual(true);
    expect(validChars(["1", "2", "R", "D"], aToZ)).toEqual(true);
    expect(validChars(["W", "O", "R", "d", " "], aToZ)).toEqual(false);
    expect(validChars(["1", "2", "R", "D", "="], aToZ)).toEqual(false);
  });

  it("should convert input to morse code", () => {
    expect(convertToMorse(["W", "O", "R", "D"])).toEqual(".-- --- .-. -..");
    expect(
      convertToMorse([
        "T",
        "H",
        "I",
        "S",
        " ",
        "I",
        "S",
        " ",
        "A",
        " ",
        "S",
        "E",
        "N",
        "T",
        "E",
        "N",
        "C",
        "E",
      ])
    ).toEqual("- .... .. ... / .. ... / .- / ... . -. - . -. -.-. .");
  });
});

describe("test cases for a function that translates morse code to english", () => {
  it("should convert a string into an array", () => {
    expect(stringToArray(".-- --- .-. -..", " ")).toStrictEqual([
      ".--",
      "---",
      ".-.",
      "-..",
    ]);
    expect(
      stringToArray("- .... .. ... / .. ... / .- / ... . -. - . -. -.-. .", " ")
    ).toStrictEqual([
      "-",
      "....",
      "..",
      "...",
      "/",
      "..",
      "...",
      "/",
      ".-",
      "/",
      "...",
      ".",
      "-.",
      "-",
      ".",
      "-.",
      "-.-.",
      ".",
    ]);
    expect(stringToArray(".-- --- .-. -..", " ")).toStrictEqual([
      ".--",
      "---",
      ".-.",
      "-..",
    ]);
    expect(
      stringToArray("- .... .. ... / .. ... / .- / ... . -. - . -. -.-. .", " ")
    ).toStrictEqual([
      "-",
      "....",
      "..",
      "...",
      "/",
      "..",
      "...",
      "/",
      ".-",
      "/",
      "...",
      ".",
      "-.",
      "-",
      ".",
      "-.",
      "-.-.",
      ".",
    ]);
  });

  it("should check input for valid input characters", () => {
    expect(validMorse([".--", "---", ".-.", "-.."])).toEqual(true);
    expect(validMorse(["1", "2", "R", "D"])).toEqual(false);
    expect(validMorse([" ", "/", "-", "."])).toEqual(true);
    expect(validMorse(["1", "2", "R", "-", "="])).toEqual(false);
  });

  it("should convert input to english", () => {
    expect(convertFromMorse([".--", "---", ".-.", "-.."], aToZ)).toEqual(
      "WORD"
    );
    expect(
      convertFromMorse(
        [
          "-",
          "....",
          "..",
          "...",
          "/",
          "..",
          "...",
          "/",
          ".-",
          "/",
          "...",
          ".",
          "-.",
          "-",
          ".",
          "-.",
          "-.-.",
          ".",
        ],
        aToZ
      )
    ).toEqual("THIS IS A SENTENCE");
  });
});
