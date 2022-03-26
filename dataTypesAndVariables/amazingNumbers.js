function amazingNumbers(num) {
    num = String(num);
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);
    }
    let result = String(sum).includes('9');
    console.log(result ?
        `${num} Amazing? True` :
        `${num} Amazing? False`);
}
amazingNumbers(1233);