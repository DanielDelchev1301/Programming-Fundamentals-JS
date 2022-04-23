function sorting(arr) {
    let fromBiggest = arr.slice().sort((a, b) => b - a);
    let fromSmallest = arr.slice().sort((a, b) => a - b);
    let sorted = [];
    for (let i = 0; i < (arr.length / 2); i++) {
        sorted.push(fromBiggest[i]);
        sorted.push(fromSmallest[i]);
    }
    if (arr.length % 2 !== 0) {
        console.log(sorted.filter((num, index) => {
            return sorted.indexOf(num) == index
        })
        .join(' '));
    } else {
        console.log(sorted.join(' '));
    }
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);