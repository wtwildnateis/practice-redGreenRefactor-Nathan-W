const { countVowels } = require('./countVowels');


describe("countVowels", () => {
    test("returns 2 for 'hello'", () => {
        expect(countVowels("hello")).toBe(2);
    });

    test("returns 1 for 'world'", () => {
        expect(countVowels("world")).toBe(1);
    });

    test ("returns 5 for 'AEIOU'", () => {
        expect(countVowels("AEIOU")).toBe(5);
    });

    test ("returns 0 for an empty string", () => {
        expect(countVowels("")).toBe(0);
    });

    test("returns 0 for string with no vowels", () => {
        expect(countVowels("rhythm")).toBe(0);
    });

    test("returns 4 for 'LaunchCode'", () => {
        expect(countVowels("LaunchCode")).toBe(4);
    });

});