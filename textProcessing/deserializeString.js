function deserializeString(arr) {
    let result = [];
    for (let curr of arr) {
        if (curr == 'end') {
            break;
        }
        let [char, rest] = curr.split(':');
        let indexes = rest.split('/');
        for (let index of indexes) {
            index = Number(index);
            result[index] = char;
        }
    }
    console.log(result.join(''));
}
deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end']);