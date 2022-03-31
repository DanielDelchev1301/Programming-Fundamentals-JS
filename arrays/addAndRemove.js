function addAndRemove(arr) {
    let newArr = [];
    let count = 1;
    for (let command of arr) {
        if (command == 'add') {
            newArr.push(count);
        } else {
            newArr.pop()
        }
        count++;
    }
    if (newArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}
addAndRemove(['remove', 'remove', 'remove']);