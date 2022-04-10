function numberModification(num) {
    let arr = String(num).split('');

    while(true) {
        let average = 0;
        for (let i = 0; i < arr.length; i++) {
            let currentNum = Number(arr[i]);
            average += currentNum; 
        }
        let isHigher = average / arr.length;
        if (isHigher > 5) {
            break;
        }
        arr.push(9);
    }
    console.log(arr.join(''));
}
numberModification(5834);