function bitcoinMining(minedGold) {
    let boughtBitcoins = 0;
    let firstDay = 0;
    let days = 0;
    let money = 0;
    for (let i = 0; i < minedGold.length; i++) {
        let gold = minedGold[i];
        days++;
        if (days % 3 === 0){
            gold = gold * 0.7;
        }
        money += gold * 67.51;
        while (money >= 11949.16) {
            money -= 11949.16;
            boughtBitcoins++;
            if (firstDay === 0) {
                firstDay = days;
            }
        }
    }
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        if (boughtBitcoins >= 1) {
            console.log(`Day of the first purchased bitcoin: ${firstDay}`);
        }    
        console.log(`Left money: ${money.toFixed(2)} lv.`);
}
bitcoinMining([50,100]);