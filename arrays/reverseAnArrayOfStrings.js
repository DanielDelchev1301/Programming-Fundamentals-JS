function reverseAnArrayOfStrings(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let oldElement = arr[i];
        let previousI = arr.length - 1 - i;
        arr[i] = arr[previousI];
        arr[previousI] = oldElement;
    }
    console.log(arr.join(' '));
}
reverseAnArrayOfStrings(['a','b','c','d','e']);