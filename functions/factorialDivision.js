function factorialDivision(numOne, numTwo) {
    let factorialOfNumOne = calculateTheFactorial(numOne);
    let factorialOfNumTwo = calculateTheFactorial(numTwo);
    console.log((factorialOfNumOne / factorialOfNumTwo).toFixed(2));
    function calculateTheFactorial(num) {
        let factorial = num;
        for (let i = num - 1; i >= 1; i--) {
            factorial *= i;
        }
        return factorial;
    }
}
factorialDivision(6, 2);