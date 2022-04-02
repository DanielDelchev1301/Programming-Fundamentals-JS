function ladybugs(arr) {
    let fieldSize = arr[0] - 1;
    let positionsOfLadybugs = arr[1].split(' ');
    let current = '';
    let command = '';
    let field = [];
    let num = 0;
    let leftOrRight = '';
    let move = 0;
    let check = true;

    for (let o = 0; o <= fieldSize; o++) {
        field.push(0);
    }
    for (let k = 0; k < positionsOfLadybugs.length; k++) {
        if (positionsOfLadybugs[k] < 0 || positionsOfLadybugs[k] > field.length - 1) {
        } else {
            field[positionsOfLadybugs[k]] = 1;
        }
    }
    
    for (let i = 2; i < arr.length; i++) {
        command = arr[i].split(' ');
        check = true;
        for (let j = 0; j < 3; j++) {
            current = command[j];
            if (j === 0) {
                num = Number(current);
            }
            if (j === 1) {
                leftOrRight = current;
            }
            if (j === 2) {
                move = Number(current);
                if (num < 0 || num > field.length - 1) {
                    continue;
                } else {
                    if (field[num] === 0) {
                        continue;
                    } else {
                        if (leftOrRight === 'left') {
                            if (num - move < 0) {
                                continue;
                            } else {
                                field[num] = 0;
                                if (field[num - move] === 1) {
                                    while (check) {
                                        move--;
                                            if ((num - move) < 0) {
                                                check = false;
                                            } else {
                                                if (field[num - move] === 1) {
                                                    check = false;
                                                } else {
                                                    field[num - move] = 1;
                                                    check = false;
                                                }
                                            }
                                    }
                                } else {
                                    field[num - move] = 1;
                                }
                            }
                        } else if (leftOrRight === 'right') {
                            if (num + move > field.length - 1) {
                                field[num] = 0;
                                continue;
                            } else {
                                field[num] = 0;
                                if (field[num + move] === 1) {
                                    while (check) {
                                        move++;
                                            if ((num + move) > field.length - 1) {
                                                check = false;
                                            } else {
                                                if (field[num + move] === 1) {
                                                    check = false;
                                                } else {
                                                    field[num + move] = 1;
                                                    check = false;
                                                }
                                            }
                                    }
                                } else {
                                    field[num + move] = 1;
                                }
                            }
                        }
                    }
                }
            }

        }
    }
    console.log(field.join(' '));
}
ladybugs([ 3, '0 1',
'0 right 1',
'2 right 1' ]
);