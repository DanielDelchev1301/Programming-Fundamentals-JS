function houseParty(arr) {
    let list = [];
    for (let command of arr) {
        let splited = command.split(' ');
        let name = splited[0];
        if (!command.includes('not')) {
            if (!list.includes(name)) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (list.includes(name)) {
                let findIndex = list.indexOf(name);
                list.splice(findIndex, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(list.join('\n'));
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']);
console.log('------------');
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']);