/*function storage(arr) {
    let myMap = new Map ();
    for (let currLine of arr) {
        let [product, quantity] = currLine.split(' ');
        quantity = Number(quantity);
        if (myMap.has(product)) {
            let existingQuantity = myMap.get(product);
            myMap.set(product, quantity + existingQuantity)
        } else {
            myMap.set(product, quantity);
        }
    }
    let result = Array.from(myMap);
    for (let [product, quantity] of result) {
        console.log(product, '->', quantity);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);
    */
function storage(arr) {
    let productList = {};
    for (let currLine of arr) {
        let [product, quantity] = currLine.split(' ');
        quantity = Number(quantity);
        if (productList.hasOwnProperty(product)) {
            let existingQuantity = productList[product];
            productList[product] = existingQuantity + quantity;
        } else {
            productList[product] = quantity;
        }
    }
    for (let product in productList) {
        console.log(product, '->', productList[product]);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);