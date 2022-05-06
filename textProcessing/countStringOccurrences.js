function countStringOccurrences(text, word) {
    text = text.split(' ');
    let counter = 0;
    for (let currWord of text) {
        if (currWord === word) {
            counter++;
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence',
'is');
console.log('---');
countStringOccurrences('softuni is great place for learning new programming languages',
'softuni');