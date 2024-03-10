// city names

function city_country(city:string,country:string) {
    return `${city} ${country}`;
}

// store velue
let cityCountry1: string = city_country("lahore", "pakistan");
let cityCountry2: string = city_country("paris", "france");
let cityCountry3: string = city_country("new york", "america");

// calling functions
console.log(cityCountry1);
console.log(cityCountry2);
console.log(cityCountry3);

