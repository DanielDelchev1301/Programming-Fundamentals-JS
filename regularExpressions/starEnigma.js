function starEnigma(arr) {
    let num = arr.shift();
    num = Number(num);
    let pattern = /[star]/gi;
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let i = 0; i < num; i++) {
        let encrypted = arr[i];
        let counter = 0;
        let match = pattern.exec(encrypted);
        while (match != null) {
            counter++;
            match = pattern.exec(encrypted);
        }
        let decrypted = [];
        for (let char of encrypted) {
            let code = char.charCodeAt(0);
            code -= counter;
            let wantedChar = String.fromCharCode(code);
            decrypted.push(wantedChar);
        }
        decrypted = decrypted.join('');
        let secondPattern = /@(?<planet>[A-Za-z]+)([^@!:>-])?:(?<population>\d+)\2?!(?<attackType>[AD])!\2?->(?<soldiers>\d+)/;
        let matched = secondPattern.exec(decrypted);
        if (matched == null) {
            continue;
        }
        let type = matched[4];
        if (type == 'A') {
            attackedPlanets.push(matched[1]);
        } else {
            destroyedPlanets.push(matched[1]);
        }
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(x => console.log(`-> ${x}`));
    console.log(`Destroyed planets: ${destroyedPlanets.length}`);
    destroyedPlanets.forEach(x => console.log(`-> ${x}`));
}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR']);
console.log('---');
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR']);