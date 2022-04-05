function printNthElement(arr) {
    let newArr = [];
    let move = Number(arr[arr.length - 1]);
    for (let i = 0; i < arr.length; i += move) {
        if (i === arr.length - 1) {
            break;
        }
        newArr.push(arr[i]);
    }
    console.log(newArr.join(' '));
}
printNthElement(['dsa', 'asd', 'test', 'test', '2']);