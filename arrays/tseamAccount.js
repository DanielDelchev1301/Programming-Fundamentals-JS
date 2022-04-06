function tseamAccount(arr) {
    let account = arr.shift().split(' ');
    let index = 0;
    let command = arr[index];
    while (command !== 'Play!') {
        index++;
        let current = command.split(' ');
        let toDo = current[0];
        let game = current[1];
        if (toDo === 'Install') {
            if (account.includes(game)) {
                command = arr[index];
                continue;
            } else {
                account.push(game);
            }
        } else if (toDo === 'Uninstall') {
            if (account.includes(game)) {
                account.splice(account.indexOf(game), 1);
            }
        } else if (toDo === 'Update') {
            if (account.includes(game)) {
                account.splice(account.indexOf(game), 1);
                account.push(game);
            }
        } else if (toDo === 'Expansion') {
            let expan = game.split('-');
            let gameOfExpan = expan[0];
            let expansss = expan[1];
            if (account.includes(gameOfExpan)) {
                let a = gameOfExpan + ':' + expansss;
                account.splice(account.indexOf(gameOfExpan) + 1, 0, a);
            }
        }
        command = arr[index];
    }
    console.log(account.join(' '));
}
tseamAccount(['CS WoW Diablo','Install LoL','Uninstall WoW',
'Update Diablo','Expansion CS-Go','Play!']);