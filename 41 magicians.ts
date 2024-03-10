// magician array

let magicians: string[] = ["david copperfeild", "dynamo", "lance burton"];

// creat function
function show_magicians(magicians:string[]): void {
    magicians.forEach(magicians => {
        console.log(magicians);
    });
}

// calling function
show_magicians(magicians)
