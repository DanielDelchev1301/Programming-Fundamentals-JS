function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(reverseAndCheck(arr[i]));
    }

    function reverseAndCheck(num) {
        let arr = num.toString().split('');
        let reversedArr = num.toString().split('').reverse();
        let isPalindrome = true;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== reversedArr[i]) {
                isPalindrome = false;
            }
        }
        return isPalindrome;
    }
}
palindromeIntegers([123, 323, 421, 121]);
palindromeIntegers([32,2,232,1010]);