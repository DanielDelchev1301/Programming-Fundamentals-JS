function thePyramidOfKingDjoser(base,increment) {
    let stoneTotal = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let height = 1;

    for (let i = base; i > 0; i -= 2) {
        if (i - 2 <= 0) {
            gold += i * i * increment;
            break;
        }
        let stone = (i - 2) * (i - 2) * increment;
        stoneTotal += stone;
        if (height % 5 === 0) {
            lapisLazuli += (i * i * increment) - stone;
        } else {
            marble += (i * i * increment) - stone;
        }
        height++;
    }
    console.log(`Stone required: ${Math.ceil(stoneTotal)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}
thePyramidOfKingDjoser(11,0.75);