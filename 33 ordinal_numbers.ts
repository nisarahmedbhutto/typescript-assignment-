// ordinal number

let ordinalNumbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
ordinalNumbers.forEach(ordinalNumbers => {
    if (ordinalNumbers == 1) {
        console.log(`${ordinalNumbers}st`);
    } else if (ordinalNumbers == 2) {
        console.log(`${ordinalNumbers}nd`);
    } else if (ordinalNumbers == 3) {
        console.log(`${ordinalNumbers}rd`);
    } else if (ordinalNumbers) {
        console.log(`${ordinalNumbers}th`);
    }
})