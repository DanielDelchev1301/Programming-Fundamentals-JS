function charactersInRange(first, second) {
    let startCode = Math.min(first.charCodeAt(0), second.charCodeAt(0));
    let endCode = Math.max(first.charCodeAt(0), second.charCodeAt(0));
    let arr = [];

    for (let i = startCode + 1; i < endCode; i++) {
        arr.push(String.fromCharCode(i));
    }
    console.log(arr.join(' '));
    
    //or can be like this with nested functions ==>
    /*let codeOfFirst = first.charCodeAt();
    let codeOfSecond = second.charCodeAt();
    if (codeOfFirst < codeOfSecond) {
        console.log(everythingBetweenFirstAndSecond(codeOfFirst, codeOfSecond));
    } else {
        console.log(everythingBetweenSecondAndFirst(codeOfSecond, codeOfFirst));
    }

    function everythingBetweenFirstAndSecond(first, second) {
        let arr = [];
        for (let i = first + 1; i < second; i++) {
            arr.push(String.fromCharCode(i));
        }
        return arr.join(' ');
    }

    function everythingBetweenSecondAndFirst(second, first) {
        let arr = [];
        for (let i = second + 1; i < first; i++) {
            arr.push(String.fromCharCode(i));
        }
        return arr.join(' ');
    }*/
}
charactersInRange('#', ':');