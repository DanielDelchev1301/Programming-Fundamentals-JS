function asciiSumator(arr) {
    let first = arr[0].charCodeAt();
    let second = arr[1].charCodeAt();
    let start = 0;
    let end = 0;
    if (first < second) {
        start = first;
        end = second;
    } else {
        start = second;
        end = first;
    }
    let text = arr[2];
    let sum = 0;
    for (let char of text) {
        let code = char.charCodeAt();
        if (code > start && code < end) {
            sum += code;
        }
    }
    console.log(sum)
}
asciiSumator(['.',
    '@',
    'dsg12gr5653feee5']);
console.log('---');
asciiSumator(['a',
    '1',
    'jfe392$#@j24ui9ne#@$']);