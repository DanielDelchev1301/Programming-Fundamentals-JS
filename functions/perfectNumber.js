function perfectNumber(num) {
    if (isPerfect(num)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.");
    }

    function isPerfect(num) {
        let sum = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                sum += i;
            }
        }
        return sum / 2 == num;
    }
}
perfectNumber(1236498);