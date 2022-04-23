function smallestTwoNumbers(arr) {
    function sortedInAscendingOrder(input) {
        return input.sort((a, b) => a - b);
    }
    let slicedAndSorted = sortedInAscendingOrder(arr).slice(0, 2);
    console.log(slicedAndSorted.join(' '));
}
//Two ways to do the same thing ====>
/*function smallestTwoNumbers(arr) {
    let sortedInAscendingOrder = arr.sort((a, b) => a - b);
    let slicedAndSorted = sortedInAscendingOrder.slice(0, 2);
    console.log(slicedAndSorted.join(' '));
}*/
smallestTwoNumbers([30, 15, 50, 5]);