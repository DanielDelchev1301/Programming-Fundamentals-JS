function loadingBar(num) {
    let arr = [];
    let index = 0;
    for (let i = 1; i <= 10; i++) {
        arr.push('.');
    }
    for (let i = 0; i < num; i += 10) {
        arr.splice(index, 1, '%');
        index++;
    }
    if (num < 100) {
        console.log(`${num}% [${arr.join('')}]`);
        console.log('Still loading...');
    } else {
        console.log(`${num}% Complete!`);
        console.log(`[${arr.join('')}]`);
    }
}
loadingBar(30);