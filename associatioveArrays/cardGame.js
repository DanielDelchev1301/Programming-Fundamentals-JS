function cardGame(arr) {
    let faceOfCards = {
        '1': 10,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14
    }
    let typeOfCards = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4
    }
    let players = {};
    for (let curr of arr) {
        let [name, cards] = curr.split(': ');
        cards = cards.split(', ');
        if (players.hasOwnProperty(name) === false) {
            players[name] = new Set();
        }
        for (let card of cards) {
            players[name].add(card);
        }
    }
    let arrOfPLayers = Object.entries(players);
    for (let [name, setOfCards] of arrOfPLayers) {
        let arrOfCards = Array.from(setOfCards);
        let power = 0;
        for (let card of arrOfCards) {
            let face = card[0];
            let type = card.slice(-1);
            power += faceOfCards[face] * typeOfCards[type];
        }
        console.log(`${name}: ${power}`);
    }
}
cardGame([
'Peter: 2C, 4H, 9H, AS, QS',
'Tomas: 3H, 10S, JC, KD, 5S, 10S',
'Andrea: QH, QC, QS, QD',
'Tomas: 6H, 7S, KC, KD, 5S, 10C',
'Andrea: QH, QC, JS, JD, JC',
'Peter: JD, JD, JD, JD, JD, JD'
]);