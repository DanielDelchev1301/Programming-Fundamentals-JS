function inventory(arr) {
    let listOfHeroes = [];
    for (let hero of arr) {
        let tokens = hero.split(' / ');
        let heroName = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2];
        let currHero = {
            heroName,
            level,
            items
        }
        listOfHeroes.push(currHero);
    }
    listOfHeroes.sort((a, b) => a.level - b.level);
    for (let hero of listOfHeroes) {
        console.log(`Hero: ${hero.heroName}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}
inventory([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]);