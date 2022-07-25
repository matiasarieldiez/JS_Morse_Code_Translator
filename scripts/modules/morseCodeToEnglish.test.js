import { morseToEnglish } from "./morseCodeToEnglish";

const isNotAString = new Error("The input type must be a string");

describe("Test Cases for a Function that Translates Morse Code to English", () => {
    it("Should return a string", () => {
        expect(typeof morseToEnglish("Hello World")).toBe("string");
    });

    it("Should throw an error if the input argument is not a string", () => {
        expect(() => {
            morseToEnglish(24567).toThroWError(isNotAString);
        });
        expect(() => {
            morseToEnglish(true).toThroWError(isNotAString);
        });

        expect(() => {
            morseToEnglish({ name: "matias" }).toThroWError(isNotAString);
        });

        expect(() => {
            morseToEnglish(["hello", "world"]).toThroWError(isNotAString);
        });
    });
});
