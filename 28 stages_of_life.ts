// stages of life withe if else if condition

let age: number = 22;

if (age < 2) {
    console.log("the person is a baby");
} else if (age == 2 && age < 4) {
    console.log("the person is a toddler.");
} else if (age == 4 && age < 13) {
    console.log("the person is a kid.");
} else if (age == 13 && age < 20) {
    console.log("the person is a teenger.");
} else if (age == 20 && age < 65) {
    console.log("the person is an adult.");
} else {
    console.log("the person is an elder.")
}