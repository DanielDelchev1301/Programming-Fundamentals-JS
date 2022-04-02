function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let toString = String(arr);
    let toSplit = toString.split('|');
    let firstPart = '';
    let secondPart = '';
    let container = [];
    let bestRoomCounter = 1;
    let isWin = true;
    let diffHealth = 0;
    
    for (let i = 0; i < toSplit.length; i++) {
        container = toSplit[i].split(' ');
        firstPart = container[0];
        secondPart = Number(container[1]);
        if (firstPart === 'potion') {
            if (health + secondPart >= 100) {
                diffHealth = secondPart - ((health + secondPart) - 100);
                health = 100;
            } else {
                health += secondPart;
                diffHealth = secondPart;
            }
            console.log(`You healed for ${diffHealth} hp.`);
            console.log(`Current health: ${health} hp.`);
            bestRoomCounter++;
        } else if (firstPart === 'chest') {
            coins += secondPart;
            console.log(`You found ${secondPart} coins.`);
            bestRoomCounter++;
        } else {
            health -= secondPart;
            if (health > 0) {
                console.log(`You slayed ${firstPart}.`);
                bestRoomCounter++;
            } else {
                console.log(`You died! Killed by ${firstPart}.`);
                console.log(`Best room: ${bestRoomCounter}`);
                isWin = false;
                break;
            }
        }
    }
    if (isWin) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);