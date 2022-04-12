function repeatString(string, rep) {
    let newString = '';

    for (let i = 0; i < rep; i++) {
        newString += string;
    }
    return newString;
}
repeatString('abc', 3);