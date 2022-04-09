function addAndSubtract(firstNum, secondNum, thirdNum) {
    let sumRes = sum(firstNum, secondNum);
    console.log(subtract(sumRes, thirdNum));

    function sum(a, b) {
        return a + b;
    }

    //let subtract = (a, b) => a - b;   It's the same like next one ==>

    function subtract(a, b) {
       return a - b;
    }
}
addAndSubtract(23, 6, 10);