
const { sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB } = require("../challenges/exercise007");

describe("sumDigits", () => {
    test("Return Sum of digit when passed number", () => {
        expect(sumDigits(1234)).toBe(10);
    });
    test("Return 0 when no passed number", () => {
        expect(sumDigits(0)).toBe(0);
    });
});

describe("createRange", () => {
    test("Pass start and end number and skip/ step number ", () => {
        expect(createRange(5, 15, 2)).toEqual([5, 7, 9, 11, 13, 15]);

    });
    test("Pass start and end number and if no step consider step number by 1", () => {
        expect(createRange(5, 15, 0)).toEqual([5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    });
});
describe("getScreentimeAlertList", () => {
    test("return an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
        const users = [
            {
                username: "Beth Smith",
                screenTime: [
                    { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                    { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                    { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                    { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                ]
            },
            {
                username: "sam_j_1989",
                name: "Sam Jones",
                screenTime: [
                    { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                    { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                    { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                ]
            },
        ]
        expect(getScreentimeAlertList(users, '2019-05-04')).toEqual(users.username);
    })
});
describe("hexToRGB", () =>{
    test("convert each hexadecimal value for R, G and B into its decimal equivalent", () => {
        expect(hexToRGB("0033ff")).toEqual("0,51,255");
        expect(hexToRGB("#FF1133")).toEqual("255,17,51");

    })
});
