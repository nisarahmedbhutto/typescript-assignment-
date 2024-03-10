// discribe cities


function describe_cities(city: string, country: string = "japan"): any {
    console.log(`${city} is in ${country}.`);
}

// calling the three cities
describe_cities("tokyo");
describe_cities("karachi", "pakistan");
describe_cities("istanbole", "turky");