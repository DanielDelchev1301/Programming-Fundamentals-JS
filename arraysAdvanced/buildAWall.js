function buildAWall(array) {
    let dailyUsedConcrete = [];
    let concrete = 0;
    array.sort((a, b) => a - b);
    while (array[0] < 30) {
        let blocks = array.filter((a) => a < 30);
        array = blocks.map((x) => (x += 1));
        concrete = array.length * 195;
        dailyUsedConcrete.push(concrete);
    }
    let sum = 0;
    for (let i = 0; i < dailyUsedConcrete.length; i++) {
        sum += dailyUsedConcrete[i];
    }
    console.log(dailyUsedConcrete.join(", "));
    console.log(`${sum * 1900} pesos`);
}
buildAWall([21, 25, 28]);