function specialNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        let j = i;
        sum += j % 10;
        if (j >= 10) {
            j = parseInt(j / 10);
            sum += j;
        }
        let output = sum === 5 || sum === 7 || sum === 11 ? `${i} -> True` : `${i} -> False`;
        console.log(output);
        sum = 0;
    }
}
specialNumbers(15);