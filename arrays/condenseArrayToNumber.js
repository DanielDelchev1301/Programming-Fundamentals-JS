function condenseArrayToNumber(arr) {
    for (let o = arr.length; o > 1; o--) {
        let sum = [arr.length - 1];
        for (let i = 0; i < arr.length - 1; i++) {
            sum[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = sum;
    }
    console.log(Number(arr));
}
condenseArrayToNumber([2,10,3]);