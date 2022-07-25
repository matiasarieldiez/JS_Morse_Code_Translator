import {
    englishToMorseCodeButton,
    morseCodeToEnglishButton,
    morseText,
    englishText,
} from "./modules/DOM_Utilities.js";
import { englishToMorse } from "./modules/englishToMorseCode.js";
import { morseToEnglish } from "./modules/morseCodeToEnglish.js";

englishToMorseCodeButton.addEventListener("click", (event) => {
    event.preventDefault();
    const textToTranslate = englishText.value;
    morseText.value = englishToMorse(textToTranslate);
    englishText.value = "";
});

morseCodeToEnglishButton.addEventListener("click", (event) => {
    event.preventDefault();
    const textToTranslate = morseText.value;
    englishText.value = morseToEnglish(textToTranslate);
    morseText.value = "";
});
