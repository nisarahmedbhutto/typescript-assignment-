// more conditional tests

// test for equality and inequality with string

let bike: string = "honda";
console.log("string Equality test");
console.log(bike === "honda");
console.log("string inEquality test");
console.log(bike === "yammah");



// lowercase test output true
let personName: string = "NISAR AHMED";
console.log("lowercase test");
let toLowerCase:string = personName.toLowerCase();
console.log(toLowerCase === "nisar ahmed");

// lowercase test output false
personName = "NISAR AHMED";
console.log("lowercase test");
toLowerCase = personName.toLowerCase();
console.log(toLowerCase === "NISAR AHMED");


// numerical tests

let age: number = 25;

// age equality test
console.log("age equality test");
console.log(age == 25);

// age inequality test
console.log("age inequality test");
console.log(age == 27);


// greater than test
console.log("age greater than test");
console.log(age > 22);

// less than test
console.log("age less than test");
console.log(age < 22);

// greater than equal test
console.log("age greater than equal test");
console.log(age >= 25);

// less than equal test
console.log("age less than equal test");
console.log(age <= 23);

// array test
let array: string[] = ["hello world"];
console.log("hello world exist in the array");
console.log(array.includes("hello world"));

array = [];
console.log("still hello world exist in the array");
console.log(array.includes("hello world"));



























