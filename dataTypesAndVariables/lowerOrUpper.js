function lowerOrUpper(letter) {
    let code = letter.charCodeAt();
    let output = code >= 97 ? 'lower-case' : 'upper-case';
    console.log(output);
}
lowerOrUpper('l');