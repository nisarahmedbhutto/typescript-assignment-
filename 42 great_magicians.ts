// fist program no 41

// magician array

// magician array

let magicians: string[] = ["david copperfeild", "dynamo", "lance burton"];

// creat function
function show_magicians(magicians: string[]): void {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}

// calling function
show_magicians(magicians)

//great magicians function
function make_great(magician: string[]) {
    return magician.map(magician => `the great ${magician}`);
}


// calling function
show_magicians(make_great(magicians));
