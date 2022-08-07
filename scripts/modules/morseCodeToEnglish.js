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
                    return reversedMorseCodeAlphabet[character] // If the character exists in morseCodeAlphabet Object
                        ? `${reversedMorseCodeAlphabet[character]}` // Return the value of morseCodeAlphabet for that key
                        : "#"; // Else Returns # for a character that cannot be translated
                }) // returns [['M','Y'], ['N','A','M','E'], ['I','S'] ,['M','A','T','I','A','S']]
                .join(""); // returns ['MY','NAME','IS','MATIAS']
        })
        .join(" "); // returns 'MY NAME IS MATIAS'
};
