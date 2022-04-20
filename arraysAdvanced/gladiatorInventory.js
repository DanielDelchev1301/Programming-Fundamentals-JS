function gladiatorInventory(arr) {
    let inventory = arr.shift().split(' ');
    for (let curr of arr) {
        let command = curr.split(' ').shift();
        let equipment = curr.split(' ').pop();
        if (command === 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        } else if (command === 'Trash') {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
            }
        } else if (command === 'Repair') {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);
                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        } else if (command === 'Upgrade') {
            let eq = equipment.split('-').shift();
            if (inventory.includes(eq)) {
                let index = inventory.indexOf(eq);
                let toInsert = equipment.split('-').join(':');
                inventory.splice((index + 1), 0, toInsert);
            }
        }
    }
    console.log(inventory.join(' '));
}
gladiatorInventory(['SWORD Shield Spear','Buy Bag',
'Trash Shield','Repair Spear','Upgrade SWORD-Steel']);