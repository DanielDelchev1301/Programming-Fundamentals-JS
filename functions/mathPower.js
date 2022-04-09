function mathPower(x, y) {
    let sum = x;

    for (let i = 1; i < y; i++) {
        sum *= x;
    }
    console.log(sum);
}
mathPower(3, 4);