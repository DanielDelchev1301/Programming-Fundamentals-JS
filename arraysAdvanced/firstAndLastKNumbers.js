function firstAndLastKNumbers(arr) {
    let kNumber = arr.shift();
    let firstK = arr.slice(0, kNumber);
    let lastK = arr.slice(-kNumber);
    /*for (let i = arr.length - 1; i >= arr.length - kNumber; i--) {
        lastK.unshift(arr[i]);
    }*/
    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);