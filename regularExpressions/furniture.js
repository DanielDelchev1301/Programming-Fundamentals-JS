function furniture(arr) {
    let pattern = />>(?<type>[A-Z]+[a-z]*)<<(?<price>\d+([\.][\d]+)?)!(?<quantity>\d+)/;
    let itemList = [];
    let totalMoneySpend = 0;
    while (arr[0] !== 'Purchase') {
        let data = arr.shift();
        let match = pattern.exec(data);
        if (match == null) {
            continue;
        }
        itemList.push(match[1]);
        totalMoneySpend += Number(match[2]) * Number(match[4]);
    }
    console.log('Bought furniture:');
    itemList.forEach(x => console.log(x));
    console.log(`Total money spend: ${totalMoneySpend.toFixed(2)}`);
}
furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']);
console.log('---');
furniture([
'>Invalid<<!5',
'Purchase']);