function signCheck(firstNum, secondNum, thirdNum) {
    let arr = [firstNum, secondNum, thirdNum];
    let negativeCount = 0;
    let check = '';

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativeCount++;
        }
    }
    if (negativeCount % 2 === 0) {
        check = 'Positive';
    } else {
        check = 'Negative';
    }
    return check;
}
signCheck(5, 12, -15);