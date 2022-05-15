function softuniBarIncome(input) {
    let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<item>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+(\.\d+)?)\$/;
    let totalIncome = 0;
    while (input[0] !== 'end of shift') {
        let data = input.shift();
        if ((info = pattern.exec(data)) !== null) {
            let total = Number(info.groups['count']) * Number(info.groups['price']);
            totalIncome += Number(total);
            console.log(`${info.groups['name']}: ${info.groups['item']} - ${total.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
softuniBarIncome(['%George%<Croissant>|2|10.3$',
'%Peter%<Gum>|1|1.3$',
'%Maria%<Cola>|1|2.4$',
'end of shift']);
console.log('---');
softuniBarIncome(['%InvalidName%<Croissant>|2|10.3$',
'%Peter%<Gum>1.3$',
'%Maria%<Cola>|1|2.4',
'%Valid%<Valid>valid|10|valid20$',
'end of shift']);