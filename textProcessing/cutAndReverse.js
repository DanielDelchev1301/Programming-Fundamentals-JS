function cutAndReverse(text) {
    console.log(text.substring(0, (text.length / 2))
        .split('')
        .reverse()
        .join(''));
    console.log(text.substring((text.length / 2), text.length)
        .split('')
        .reverse()
        .join(''));
}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');