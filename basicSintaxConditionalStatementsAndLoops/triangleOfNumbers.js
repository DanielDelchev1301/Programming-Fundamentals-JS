function triangleOfNumbers(num) {
    for (let i = 1; i <= num; i++) {
        let newLine = '';
        for (let o = 1; o <= i; o++) {
            newLine += i + ' ';
        }
        console.log(newLine);
    }
}
triangleOfNumbers(5);