function mergeArrays(first, second) {
    let third = [];
    for (let i = 0; i <= first.length - 1; i++) {
        if (i % 2 === 0) {
            third.push(Number(first[i]) + Number(second[i]));
        } else {
            third.push(first[i] + second[i]);
        }
    }
    console.log(third.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']);