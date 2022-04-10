function oddAndEvenSum(num) {
    //This is the easier way ==>
    let passToString = String(num);
    let oddSum = 0;
    let evenSum = 0;
    
    for (let i = 0; i < passToString.length; i++) {
        let currentNum = Number(passToString[i]);
        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    //But it also can be like this, with nested functions ==>

    /*let passToString = String(num);
    
    function totalEvenSum(passToString) {
        let evenSum = 0;
        for (let i = 0; i < passToString.length; i++) {
            let currentNum = Number(passToString[i]);
            if (currentNum % 2 === 0) {
                evenSum += currentNum;
            }
        }
        return evenSum;
    }

    function totalOddSum(passToString) {
        let oddSum = 0;
        for (let i = 0; i < passToString.length; i++) {
            let currentNum = Number(passToString[i]);
            if (currentNum % 2 !== 0) {
                oddSum += currentNum;
            }
        }
        return oddSum;
    }

    console.log(`Odd sum = ${totalOddSum(passToString)}, Even sum = ${totalEvenSum(passToString)}`);*/
}
oddAndEvenSum(1000435);