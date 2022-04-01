function commonElements(first, second) {
    for (let str of first) {
        for (let str2 of second) {
            if (str2 === str) {
                console.log(str);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);