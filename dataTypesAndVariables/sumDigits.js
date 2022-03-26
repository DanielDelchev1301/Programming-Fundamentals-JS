function sumDigits(num) {
    let toString = String(num);
    let splitedNum = toString.split('');
    let sum = 0;
    for (let i = 1; i <= toString.length; i++) {
        let current = splitedNum.shift();
        sum += Number(current);
    }
    console.log(sum);
}
sumDigits(245678);