import { englishToMorse } from "./englishToMorseCode";

const isNotAString = new Error("The input type must be a string");

describe("Test Cases for a Function that Translates English to Morse Code", () => {
    it("Should return a string", () => {
        expect(typeof englishToMorse("Hello World")).toBe("string");
    });

    it("Should throw an error if the input argument is not a string", () => {
        expect(() => {
            englishToMorse(24567).toThroWError(isNotAString);
        });
        expect(() => {
            englishToMorse(true).toThroWError(isNotAString);
        });

        expect(() => {
            englishToMorse({ name: "matias" }).toThroWError(isNotAString);
        });

        expect(() => {
            englishToMorse(["hello", "world"]).toThroWError(isNotAString);
        });
    });
});
