function race(input) {
    let participants = input.shift();
    let patternName = /[A-Za-z]/g;
    let patternDistance = /\d/g;
    let raceBook = {};
    while (input[0] !== 'end of race') {
        let info = input.shift();
        let name = info.match(patternName).join('');
        let distance = info.match(patternDistance);
        let Km = 0;
        distance.forEach(x => Km += Number(x));
        if (participants.includes(name)) {
            if (raceBook.hasOwnProperty(name) == false) {
                raceBook[name] = 0;
            }
            raceBook[name] += Km;
        }
    }
    let sorted = Object.entries(raceBook);
    sorted.sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            console.log(`${i + 1}st place: ${sorted[i][0]}`);
        } else if (i == 1) {
            console.log(`${i + 1}nd place: ${sorted[i][0]}`);
        } else {
            console.log(`${i + 1}rd place: ${sorted[i][0]}`);
        }
    }
}
race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);
console.log('---');
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);