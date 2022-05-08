function modernTimesOfHashTag(text) {
    let tokens = text.split(' ');
    for (let current of tokens) {
        if (current.startsWith('#')) {
            let word = current.substring(1, current.length);
            if (/^[a-zA-Z]+$/.test(word)) {
                console.log(word);
            }
        }
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
console.log('---');
modernTimesOfHashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');