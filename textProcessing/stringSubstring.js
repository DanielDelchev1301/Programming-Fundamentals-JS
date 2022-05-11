function stringSubstring(word, text) {
    word = word.toLowerCase();
    text = text.toLowerCase();
    let isFound = false;
    for (let currWord of text.split(' ')) {
        if (currWord === word) {
            console.log(word);
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascRipt',
' is the best programming language JavaScript');
console.log('---');
stringSubstring('python',
'JavaScript is the best programming language');