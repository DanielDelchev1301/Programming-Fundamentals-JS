function bombNumbers(sequence, special) {
    let bomb = special.shift();
    let power = special.shift();
    while (true) {
        if (sequence.includes(bomb)) {
            let index = sequence.indexOf(bomb);
            if (index - power >= 0) {
                sequence.splice((index - power), (power * 2 + 1));
            } else {
                sequence.splice(0, (power * 2 + 1));
            }
        } else {
            break;
        }
    }
    let sum = 0;
    sequence.map(x => sum += x);
    console.log(sum);
}
bombNumbers([1, 4, 4, 2, 8, 9, 1],[9, 3]);