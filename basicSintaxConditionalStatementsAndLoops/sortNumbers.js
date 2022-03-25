function sortNumbers(a,b,c) {
    //or let makeArray = [a,b,c];
    let makeArray = Array(a,b,c);
    makeArray.sort((a, b) => b - a);
    for (let i = 1; i <= 3; i++){
        let current = makeArray.shift();
        console.log(current);
    }
   // console.log(makeArray);
}
sortNumbers(2,3,1);