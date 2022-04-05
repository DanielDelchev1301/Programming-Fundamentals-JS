function nonDecreasingSubset(arr) {
    let newArr = [];
    let n = arr[0];
    for (let num of arr) {
        if (num >= n) {
            newArr.push(num);
            n = num;
        }
    }
    console.log(newArr.join(' '));
}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);