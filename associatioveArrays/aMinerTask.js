function aMinerTask(arr) {
    let resourcesList = {};
    for (let i = 0; i < arr.length; i+=2) {
        let resource = arr[i];
        let quantity = Number(arr[i + 1]);
        if (resourcesList.hasOwnProperty(resource)) {
            resourcesList[resource] += quantity;
        } else {
            resourcesList[resource] = quantity;
        }
    }
    for (let key in resourcesList) {
        console.log(key, '->', resourcesList[key]);
    }
}
aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '15'
]);