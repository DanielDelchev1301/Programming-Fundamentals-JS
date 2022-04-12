function smallestOfThreeNumbers(firstNum, secondNum, thirdNum) {
    return Math.min(firstNum, secondNum, thirdNum);

    //can be like this with nested arrow function ==>
    /*let smallestNum = (num1, num2, num3) => Math.min(firstNum, secondNum, thirdNum);
    console.log(smallestNum(firstNum, secondNum, thirdNum));*/

    //Or it can be like this with nested function ==>
    /*let smallestNumber = function (num1, num2, num3) {
        let smallestNum = 0;
        if (num1 < num2 && num1 < num3) {
            smallestNum = num1;
        } else if (num2 < num1 && num2 < num3) {
            smallestNum = num2;
        } else {
            smallestNum = num2;
        }
        return smallestNum;
    }
    console.log(smallestNumber(firstNum, secondNum, thirdNum));*/
}
smallestOfThreeNumbers(2, 5, 3);