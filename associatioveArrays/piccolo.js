function piccolo(arr) {
    let parkingLot = {};
    for (let curr of arr) {
        let [toDo, carNumber] = curr.split(', ');
        if (toDo === 'IN') {
            parkingLot[carNumber] = 0;
        } else if (toDo === 'OUT') {
            delete parkingLot[carNumber];
        }
    }
    let sorted = Object.entries(parkingLot);
    sorted.sort();
    if (sorted.length <= 0) {
        console.log('Parking Lot is Empty');
    } else {
        for (let [carNum, num] of sorted) {
            console.log(carNum);
        }
    }
}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);