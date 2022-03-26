function triplesOfLatinLetters(n) {
    n = Number(n);
    for (let i = 1; i <= n; i++) {
        let letter1 = String.fromCharCode(96 + i);
        for (let o = 1; o <= n; o++) {
            let letter2 = String.fromCharCode(96 + o);
            for (let p = 1; p <= n; p++) {
                let letter3 = String.fromCharCode(96 + p);
                let output = letter1 + letter2 + letter3;
                console.log(output);
            }
        }
    }
}
triplesOfLatinLetters('3');