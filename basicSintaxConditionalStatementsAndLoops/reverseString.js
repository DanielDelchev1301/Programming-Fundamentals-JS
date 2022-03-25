function reverseString(string) {
    let splitString = string.split('');
    let reverseString = splitString.reverse();
    let joinString = reverseString.join('');
    console.log(joinString);
}
reverseString('Hello SoftUni');