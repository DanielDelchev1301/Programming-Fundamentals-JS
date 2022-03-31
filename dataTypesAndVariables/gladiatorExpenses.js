function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let sum = 0;
    let counter = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 3 === 0 && i % 2 === 0) {
            sum += shieldPrice;
            counter++;
            if (counter % 2 === 0) {
                sum += armorPrice;
            }
        } 
        if (i % 3 === 0) {
            sum += swordPrice;
        }
        if (i % 2 === 0) {
            sum += helmetPrice;
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
gladiatorExpenses(7, 2 ,3 ,4, 5);