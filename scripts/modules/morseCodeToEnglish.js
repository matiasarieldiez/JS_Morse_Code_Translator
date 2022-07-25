import { reversedMorseCodeAlphabet } from "./alphabetObject.js";

// Morse to English Pure Fucntion
export const morseToEnglish = (string) => {
    //Translate to English
    return string
        .split("|") // returns ['-- -.--','-. .- -- .','.. ...','-- .- - .. .- ...'];
        .map((words) => {
            return words
                .split(" ") // returns [['--','-.--'],['-.','.-','--','.'],['..','...'],['--','.-','-','..','.-','...']];
                .map((character) => {
                    return reversedMorseCodeAlphabet[character]
                        ? `${reversedMorseCodeAlphabet[character]}`
                        : "#";
                }) // returns [['M','Y'], ['N','A','M','E'], ['I','S'] ,['M','A','T','I','A','S']]
                .join(""); // returns ['MY','NAME','IS','MATIAS']
        })
        .join(" "); // returns 'MY NAME IS MATIAS'
};
