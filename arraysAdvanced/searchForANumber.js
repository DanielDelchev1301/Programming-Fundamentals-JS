function searchForANumber(sequence, commands) {
    let take = commands.shift();
    let deleteNums = commands.shift();
    let search = commands.shift();
    let arr = sequence.slice(0, take);
    arr.splice(0, deleteNums);
    let count = 0;
    arr.map(x => {
        return x === search? count++ : false;
    })
    console.log(`Number ${search} occurs ${count} times.`);
}
searchForANumber([7, 1, 5, 8, 2, 7],[3, 1, 5]);