function simpleCalculator(numOne, numTwo, operator) {
    switch(operator) {
        case 'multiply': multiply(numOne, numTwo); break;
        case 'divide': divide(numOne, numTwo); break;
        case 'add': add(numOne, numTwo); break;
        case 'subtract': subtract(numOne, numTwo); break;
    }

    function multiply(a, b) {
        console.log(a * b);
    }

    function divide(a, b) {
        console.log(a / b);
    }

    function add(a, b) {
        console.log(a + b);
    }

    function subtract(a, b) {
        console.log(a - b);
    }
}
simpleCalculator(5, 5, 'multiply');