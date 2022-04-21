function processOddNumbers(arr) {
    let processedArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            processedArr.unshift(arr[i] * 2);
        }
    }
    console.log(processedArr.join(' '));

    // the second way to solve this problem ====>

    let filtered = arr.filter((x, i) => i % 2 == 1);
    let doubled = filtered.map(x => x * 2);
    let reversed = doubled.reverse();
    console.log(reversed.join(' '));

    //Third way to solve it ====>

    console.log(
        arr
            .filter((x, i) => i % 2 == 1)
            .map(x => x * 2)
            .reverse()
            .join(' ')
    );
}
processOddNumbers([10, 15, 20, 25]);