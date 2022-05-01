function storeProvision(currentsStock, orderedProducts) {
    let modifiedCurrentStock = currentsStock.map((x, i) => {
        if (i % 2 !== 0) {
            return Number(x);
        } else {
            return x;
        }
    });
    let modifiedOrderedProducts = orderedProducts.map((x, i) => {
        if (i % 2 !== 0) {
            return Number(x);
        } else {
            return x;
        }
    });
    for (let i = 0; i < modifiedOrderedProducts.length; i++) {
        if (i % 2 === 0) {
            if (modifiedCurrentStock.includes(modifiedOrderedProducts[i])) {
                let index = modifiedCurrentStock.indexOf(modifiedOrderedProducts[i]);
                modifiedCurrentStock[index + 1] += modifiedOrderedProducts[i + 1];
            } else {
                modifiedCurrentStock.push(modifiedOrderedProducts[i]);
                modifiedCurrentStock.push(modifiedOrderedProducts[i + 1]);
            }
        }
    }
    let obj = {};
    for (let i = 0; i < modifiedCurrentStock.length; i++) {
        if (i % 2 == 0) {
            obj[modifiedCurrentStock[i]] = modifiedCurrentStock[i + 1];
        }
    }
    let entries = Object.entries(obj);
    for (let [key, value] of entries) {
        console.log(`${key} -> ${value}`);
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]);