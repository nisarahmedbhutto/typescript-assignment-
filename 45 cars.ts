// cars function

interface Car {
    manufacturer: string;
    modele: string;
    [key: string]: any;
}

function creatCar(manufacturer: string, modele: string, ...options: [string, any][]): any {
    let car: any = { manufacturer, modele };

    //assign aditional options

    options.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}

//creat a car manufacturer model with aditional options 

let myCar: any = creatCar('toyota', 'corolla', ['color', 'black'], ['year', 2024]);
console.log(myCar);