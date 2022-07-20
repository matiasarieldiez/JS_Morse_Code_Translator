// A to Z in Morse Code
export const morseCodeAlphabet = {
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

//Reverse the A-Z Object
export const reversedMorseCodeAlphabet = Object.entries(
    morseCodeAlphabet,
).reduce((accumulator, [key, value]) => {
    accumulator[value] = key;
    return accumulator;
}, {});
