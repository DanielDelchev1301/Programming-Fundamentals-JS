function train(arr) {
    let wagons = arr
    .shift()
    .split(' ')
    .map(Number);
    let maxCapacityOfEachWagon = Number(arr.shift());
    for (let command of arr) {
        if (command.length > 3) {
            let splited = command.split(' ');
            wagons.push(Number(splited[1]));
            continue;
        }
        for (let i = 0; i < wagons.length; i++) {
            if (wagons[i] + Number(command) <= maxCapacityOfEachWagon) {
                wagons[i] += Number(command);
                break;
            }
        }
    }
    console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
'75','Add 10','Add 0','30','10','75']);