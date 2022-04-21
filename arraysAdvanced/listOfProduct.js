function listOfProduct(arr) {
    let sortedArr = arr.sort();
    let element = 1;
    for (let product of sortedArr) {
        console.log(`${element}.${product}`);
        element++;
    }
}
listOfProduct(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);