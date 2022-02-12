const{sumMultiples, areWeCovered,createMatrix,isItPrime,isValidDNA,getComplementaryDNA}=require("../challenges/exercise006");

describe("sumMultiples",() => {
    test("It throws an error if not passed an array",() => {
        expect(() => {
            sumMultiples();
        }).toThrow("arr is required");
    });
})

describe(sumMultiples,()=>{
    test("It returns of  any numbers which is multiple of 3 or 5",()=>{
        const result=sumMultiples([1,3,5]);
        const expected=8;
        expect(result).toBe(expected);
    });
    test("It works with ok when decimal numbers",()=>{
        const result=sumMultiples([1,3,5.0,2,12,10]);
        const expected=30;
        expect(result).toBe(expected);
    });
    test("return 0 if there are no multiple of 5 or 3 ",()=>{
        expect(sumMultiples([1,2,13,7,17])).toBe(0);
    });
});

describe("areWeCovered",() =>{
    test("It returns false if there are no staff at all",()=>{
        expect(areWeCovered([],"Sunday")).toBe(false);
        expect(areWeCovered([],"Monday")).toBe(false);
        expect(areWeCovered([],"Tuesday")).toBe(false);
        expect(areWeCovered([],"Wednesday")).toBe(false);
        expect(areWeCovered([],"Thursday")).toBe(false);
        expect(areWeCovered([],"Friday")).toBe(false);
        expect(areWeCovered([],"Saturday")).toBe(false);

    });
    test("It returns false if there are not enough staff",()=>{
        const staff=[
            {name:"Sushama", rota:["Monday","Tuesday"]},
            {name:"Jay", rota:["Monday","Tuesday"]},
            {name:"Pratik", rota:["Monday","Tuesday"]},
            {name:"Asha", rota:["Monday","Tuesday"]},
        ];
        expect(areWeCovered(staff,"Wednesday")).toBe(false);
    });

    test("It returns true at least 3 staff required",()=>{
        const staff=[
            {name:"Sushama", rota:["Monday","Tuesday","Wednesday"]},
            {name:"Jay", rota:["Monday","Tuesday","Wednesday"]},
            {name:"Pratik", rota:["Monday","Tuesday","Thursday","Friday","Wednesday"]},
            {name:"Asha", rota:["Monday","Tuesday"]},
        ];
        expect(areWeCovered(staff,"Wednesday")).toBe(true);
    });
});
describe("createMatrix",()=>{
    test("It return matrix  of 1*1 when passed 1",() =>{
        expect(createMatrix(1,"foo")).toEqual([ ["foo"] ]);
    });
    test("It return matrix  of 3*3 when passed 3",() =>{
        expect(createMatrix(3,"foo")).toEqual([ 
                                                    ["foo","foo","foo"],
                                                    ["foo","foo","foo"],
                                                    ["foo","foo","foo"] 
                                                ]);
    });
    test("It return matrix  of 0 when passed 0",() =>{
        expect(createMatrix(0,"foo")).toEqual([]);
    });

});
describe("isItPrime",() => {
    test("It returns true if the number is prime when passed 7",() => {
        expect(isItPrime(7)).toBe(true);
    });
    test("It returns false if the number is not prime when passed 6",() => {
        expect(isItPrime(6)).toBe(false);
    });
    test("It returns false if the number is not prime when passed 1",() => {
        expect(isItPrime(1)).toBe(false);
    });
});
describe("isValidDNA",() =>{
    test("Returns true string contains valid DNA",() =>{
        expect(isValidDNA("AAAGTCTGAC")).toBe(true);
    });
    test("Returns false string contains valid DNA",() =>{
        expect(isValidDNA("PQRSTUV")).toBe(false);
    });
});
describe("getComplementaryDNA",() =>{
    test("Return complementry DNA string",() =>{
        expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    });
});