import { morseCodeAlphabet } from "./alphabetObject.js";

// English to Morse Pure Fucntion - "My Name Is Matias"

// Translate to Morse Code
export const englishToMorse = (string) => {
    return string
        .split(" ") // returns ['My','Name','Is','Matias']
        .map((words) => {
            return words
                .toUpperCase() // returns ['MY','NAME','IS','MATIAS']
                .split("") // returns [['M','Y'], ['N','A','M','E'], ['I','S'] ,['M','A','T','I','A','S']]
                .map((character) => {
                    return morseCodeAlphabet[character]
                        ? `${morseCodeAlphabet[character]}`
                        : "#";
                }) // returns [['--','-.--'],['-.','.-','--','.'],['..','...'],['--','.-','-','..','.-','...']];
                .join(" "); // returns ['-- -.--','-. .- -- .','.. ...','-- .- - .. .- ...'];
        })
        .join("|"); // returns "-- -.--   -. .- -- .   .. ...   -- .- - .. .- ..."
};
