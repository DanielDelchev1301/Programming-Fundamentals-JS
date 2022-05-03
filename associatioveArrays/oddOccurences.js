function oddOccurences(string) {
    let arr = string.split(' ').map(x => x.toLowerCase());
    let myObj = {};
    for (let curr of arr) {
        if (myObj.hasOwnProperty(curr)) {
            myObj[curr]++;
        } else {
            myObj[curr] = 1;
        }
    }
    let inLine = '';
    for (let key in myObj) {
        if (myObj[key] % 2 !== 0) {
            inLine += key + ' ';
        }
    }
    console.log(inLine);
}
oddOccurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('-----');
oddOccurences('Cake IS SWEET is Soft CAKE sweet Food');