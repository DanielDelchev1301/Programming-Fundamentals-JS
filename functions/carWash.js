function carWash(arr) {
    let howMuchClean = 0;
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        switch(current) {
            case 'soap': howMuchClean += 10; break;
            case 'water': howMuchClean *= 1.2; break;
            case 'vacuum cleaner': howMuchClean *= 1.25; break;
            case 'mud': howMuchClean *= 0.9; break;
        }
    }
    console.log(`The car is ${howMuchClean.toFixed(2)}% clean.`);
}
carWash(['soap', 'soap', 'vacuum cleaner',
 'mud', 'soap', 'water']);