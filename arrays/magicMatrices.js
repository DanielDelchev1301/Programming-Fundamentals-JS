function magicMatrices(matrices) {
    let firstArr = matrices[0]; 
    let secondArr = matrices[1];
    let thirdArr = matrices[2];
    let sumOfFirstRow = 0;
    let sumOfSecondRow = 0;
    let sumOfThirdRow = 0;
    let isMagical = true;
    for (let i = 0; i < firstArr.length; i++) {
        sumOfFirstRow += firstArr[i];
        sumOfSecondRow += secondArr[i];
        sumOfThirdRow += thirdArr[i];
    }
    console.log(sumOfFirstRow === sumOfSecondRow
        && sumOfFirstRow === sumOfThirdRow 
        && sumOfSecondRow === sumOfThirdRow ? isMagical : !isMagical);
}
magicMatrices([[4, 5, 6],
                [6, 5, 4],
                [5, 5, 5]]);
console.log('--------------');
magicMatrices([[11, 32, 45],
                [21, 0, 1],
                [21, 1, 1]]);