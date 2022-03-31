function arrayRotation(arr, rotations) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (rotations === arr.length) {
            rotations = 0;
        } 
        while (rotations > arr.length) {
            rotations -= arr.length;
        }
        newArr.push(arr[rotations]);
        rotations++;
    }
    console.log(newArr.join(' '));
}
arrayRotation([2, 4, 15, 31], 5);