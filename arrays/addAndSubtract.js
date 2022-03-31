function addAndSubtract(arr) {
    let i = 0;
    let modified = [];
    let sumOfArr = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            modified.push(num + i);
        } else {
            modified.push(num - i);
        }
        sumOfArr += num;
        i++;
    }
    let sumOfModified = 0;
    for (let num of modified) {
        sumOfModified += num;
    }
    console.log(modified);
    console.log(sumOfArr);
    console.log(sumOfModified);
}
addAndSubtract([5, 15, 23, 56, 35]);