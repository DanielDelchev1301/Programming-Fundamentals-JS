function arrayManipulator(arrayOfNumbers, commands) {
    let index = 0;
    let element = 0;
    for (let command of commands) {
        let curr = command.split(' ');
        let toDo = curr.shift();
        if (toDo === 'add') {
            index = Number(curr[0]);
            element = Number(curr[1]);
            arrayOfNumbers.splice(index, 0, element);
        } else if (toDo === 'addMany') {
            index = Number(curr.shift());
            arrayOfNumbers.splice(index, 0, ...curr.map(Number));
        } else if (toDo === 'contains') {
            element = Number(curr[0]);
            console.log(arrayOfNumbers.indexOf(element));
        } else if (toDo === 'remove') {
            index = Number(curr[0]);
            arrayOfNumbers.splice(index, 1);
        } else if (toDo === 'shift') {
            positions = Number(curr[0]);
            for (let i = 0; i < positions; i++) {
                let el = arrayOfNumbers.shift();
                arrayOfNumbers.push(el);
            }
        } else if (toDo === 'sumPairs') {
            let newArr = [];
            if (arrayOfNumbers.length % 2 !== 0) {
                arrayOfNumbers.push(0);
            }
            for (let i = 0; i < arrayOfNumbers.length; i += 2) {
                let sumOfPairs = arrayOfNumbers[i] + arrayOfNumbers[i + 1];
                newArr.push(sumOfPairs);
            }
            arrayOfNumbers = newArr;
        } else if (toDo === 'print') {
            console.log(`[ ${arrayOfNumbers.join(', ')} ]`);
        }
    }
}
arrayManipulator([1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);    