function pascalCaseSplitter(string) {
    string = string.split('');
    let words = [];
    string.forEach(el => {
        if (el == el.toUpperCase()) {
            words.push(el);
        } else if (el == el.toLowerCase()) {
            words[words.length - 1] += el;
        }
    });
    console.log(words.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('---');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');