function wordsTracker(arr) {
    let words = arr.shift().split(' ');
    let myObj = {};
    for (let word of words) {
        myObj[word] = 0;
    }
    for (let word of arr) {
        if (myObj.hasOwnProperty(word)) {
            myObj[word]++;
        }
    }
    let sorted = Object.entries(myObj);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let [word, count] of sorted) {
        console.log(word, '-', count);
    }
}
wordsTracker(['this sentence', 
'In', 'this', 'sentence', 
'you', 'have', 'to', 'count',
'the', 'occurances', 'of', 'the', 
'words', 'this', 'and', 'sentence', 
'because', 'this', 'is', 'your', 'task']);