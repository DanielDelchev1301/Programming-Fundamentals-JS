function evenAndOddSubtraction(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    let sumOfOdd = 0;
    let sumOfEven = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            sumOfEven += num;
        } else {
            sumOfOdd += num;
        }
    }
    console.log(sumOfEven - sumOfOdd);
}
evenAndOddSubtraction(['1','2','3','4','5','6']);