function printAndSum(start,end) {
    let sum = 0;
    let printInLine = '';
    for (let i = start; i <= end; i++) {
        printInLine += i + ' ';
        sum += i;
    }
    console.log(printInLine);
    console.log(`Sum: ${sum}`);
}
printAndSum(5,10);