function wordOccurrences(arr) {
    let myMap = new Map();
    for (let word of arr) {
        if (myMap.has(word)) {
            let times = myMap.get(word) + 1;
            myMap.set(word, times);
        } else {
            myMap.set(word, 1);
        }
    }
    let sorted = Array.from(myMap.entries());
    sorted.sort((a, b) => b[1] - a[1]);
    for (let [word, times] of sorted) {
        console.log(word, '->', times, 'times');
    }
}
wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another",
 "sentence", "And", "finally", "the", "third", "sentence"]);