function partyTime(arr) {
    let [invites, guestsToCome] = arr.join('|').split('|PARTY|');
    invites = invites.split('|');
    guestsToCome = guestsToCome.split('|');
    for (let guest of guestsToCome) {
        if (invites.includes(guest)) {
            let index = invites.indexOf(guest);
            let cut = invites.splice(index, 1);
        }
    }
    console.log(invites.length);
    for (let guest of invites) {
        if (Number(guest[0]) != NaN) {
            console.log(guest);
        } else {
            console.log(guest);
        }
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);