function armies(input) {
    let armies = {};
    for (let data of input) {
        if (data.includes(' arrives')) {
            let leader = data.split(' arrives')[0];
            if (!armies.hasOwnProperty(leader)) {
                armies[leader] = {};
            }
        } else if (data.includes(' defeated')) {
            let leader = data.split(' defeated')[0];
            if (armies.hasOwnProperty(leader)) {
                delete armies[leader];
            }
        } else if (data.includes(': ')) {
            let [leader, rest] = data.split(': ');
            let [armyName, armyCount] = rest.split(', ');
            if (armies.hasOwnProperty(leader)) {
                armies[leader][armyName] = Number(armyCount);
            }
        } else if (data.includes(' + ')) {
            let [armyName, armyCount] = data.split(' + ');
            for (let leader in armies) {
                if (armies[leader].hasOwnProperty(armyName)) {
                    armies[leader][armyName] += Number(armyCount);
                }
            }
        }
    }
    let sortedLeaders = Object.keys(armies).sort((a, b) => totalArmyCount(armies[b]) - totalArmyCount(armies[a]));
    sortedLeaders.map(leader => {
        console.log(`${leader}: ${totalArmyCount(armies[leader])}`);
        let sortedArmy = Object.entries(armies[leader]).sort((a, b) => b[1] - a[1]);
        sortedArmy.map(army => console.log(`>>> ${army[0]} - ${army[1]}`));
    });
    function totalArmyCount(leader) {
        let total = 0;
        Object.entries(leader).map(army => total += Number(army[1]));
        return total;
    }
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000', 'Findlay arrives',
    'Findlay: Britox, 34540', 'Wexamp + 6000',
    'Juard + 1350', 'Britox + 4500',
    'Porter arrives', 'Porter: Legion, 55000',
    'Legion + 302', 'Rick Burr defeated',
    'Porter: Retix, 3205']);