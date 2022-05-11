function revealWords(words, text) {
    if (words.includes(',')) {
        words = words.split(', ');
        for (let word of words) {
            text = text.replace('*'.repeat(word.length), word);
        }
    } else {
        text = text.replace('*'.repeat(words.length), words);
    }
    console.log(text);
}
revealWords('great',
'softuni is ***** place for learning new programming languages');
console.log('---');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');