function englishNameOfTheLastDigit(num) {
    let stringNum = String(num);
    let splitNum = stringNum.split("");
    let reverseNum = splitNum.reverse();
    let getTheRightNum = reverseNum.shift();
    getTheRightNum = Number(getTheRightNum);

    
    if (getTheRightNum === 0) {
        console.log('zero');
    } else if (getTheRightNum % 9 === 0) {
        console.log('nine');
    } else if (getTheRightNum % 8 === 0) {
        console.log('eight');
    } else if (getTheRightNum % 7 === 0) {
        console.log('seven');
    } else if (getTheRightNum % 6 === 0) {
        console.log('six');
    } else if (getTheRightNum % 5 === 0) {
        console.log('five');
    } else if (getTheRightNum % 4 === 0) {
        console.log('four');
    } else if (getTheRightNum % 3 === 0) {
        console.log('three');
    } else if (getTheRightNum % 2 === 0) {
        console.log('two');
    } else if (getTheRightNum % 1 === 0) {
        console.log('one');
    }
}
englishNameOfTheLastDigit(1640);