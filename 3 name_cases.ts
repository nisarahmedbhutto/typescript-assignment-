//name cases uppercase/lowwercase/titlecase

let personName: string = 'nisar ahmed';

//name cases
let lowercase: string = personName.toLowerCase();
let uppercase: string = personName.toUpperCase();
let titlecase: string = personName.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

//print console

console.log(lowercase);
console.log(uppercase);
console.log(titlecase);