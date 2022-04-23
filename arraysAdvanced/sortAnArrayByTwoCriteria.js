(arr) => console.log(arr.sort().sort((a, b) => a.length - b.length).join('\n'));
// one line solve ===^ its the same like following ===>
function sortAnArrayByTwoCriteria(arr) {
    let sorted = arr.sort()
    .sort((a, b) => a.length - b.length);
    console.log(sorted.join('\n'));
}
sortAnArrayByTwoCriteria(['alpha', 'beta', 'gamma']);