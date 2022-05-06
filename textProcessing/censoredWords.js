function censoredWords(text, word) {
    console.log(text.split(word).join('*'.repeat(word.length)));
}
censoredWords('A small sentence with some words', 'small');
console.log('---');
censoredWords('Find the hidden word', 'hidden');
/*function censoredWords(text, word) {
    let censored = '';
    for (let letter of word) {
        letter = '*';
        censored += letter;
    }
    console.log(text.split(word).join(censored));
}*/