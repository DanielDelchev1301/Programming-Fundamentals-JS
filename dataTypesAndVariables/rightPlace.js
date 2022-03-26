function rightPlace(first, char, second) {
    let replaceChar = first.replace('_',char);
    // could be :
    // let output = replaceChar === second? 'Matched' : 'Not Matched';
    // console.log(output);
    if (replaceChar === second) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}
rightPlace('Str_ng','I','Strong');