function calculator(firstNum, operator, secondNum) {
    let code = operator.charCodeAt();
    let sum = 0;
    switch (code) {
        case 42: sum = firstNum * secondNum; break;
        case 43: sum = firstNum + secondNum; break;
        case 45: sum = firstNum - secondNum; break;
        case 47: sum = firstNum / secondNum; break;
    }
    console.log(sum.toFixed(2));
}
calculator(5, '+', 10);