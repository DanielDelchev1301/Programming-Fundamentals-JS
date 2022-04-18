function distrinctArray(arr) {
    let filtredArr = arr.filter((num, index) => {
        return arr.indexOf(num) === index
    })
    console.log(filtredArr.join(' '));
    //second way====>
    /*let newArr = [];
    for (let num of arr) {
        if (!newArr.includes(num)) {
            newArr.push(num);
        }
    }
    console.log(newArr.join(' '));*/
}
distrinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);