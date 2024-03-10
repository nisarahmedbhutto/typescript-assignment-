// program no 41

// magician array

let magicians: string[] = ["david copperfeild", "dynamo", "lance burton"];

// creat function
function show_magicians(magicians: string[]): void {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}

//great magicians function
function make_great(magician: string[]) {
    return magician.map(magician => `the great ${magician}`);
}

// progam no 43
// copy array
let copyArray = [...magicians];

//calling function
console.log('original magicians');
show_magicians(copyArray);

console.log('\ngreat megicians');
show_magicians(make_great(copyArray));







