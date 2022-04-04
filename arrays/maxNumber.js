function maxNumber(arr) {
    let newArr = [];
    let check = false;
    for (let i = 0; i < arr.length; i++) {
        check = false;
        for (let o = i + 1; o < arr.length; o++) {
            if (arr[i] <= arr[o]) {
                check = true;
            }
        }
        if (check === false) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr.join(' '));
}
maxNumber([14, 24, 3, 19, 15, 17]);