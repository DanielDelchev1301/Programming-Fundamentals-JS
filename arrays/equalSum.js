function equalSum(arr) {
    let leftSum= 0;
    let rightSum = 0;
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 1) {
            console.log(i);
            check = true;
            break;
        }
        for (let j = i - 1; j >= 0; j--) {
            leftSum += Number(arr[j]);
        }
        for (let k = i + 1; k < arr.length; k++) {
            rightSum += Number(arr[k]);
        }
        if (leftSum === rightSum) {
            console.log(i);
            check = true;
            break;
        }
        leftSum = 0;
        rightSum = 0;
    }
    if (check === false) {
        console.log('no');
    }
}
equalSum([1, 2]);