function phoneBook(data) {
    let phoneBookList = {};
    for (let line of data) {
        let [name, number] = line.split(' ');
        phoneBookList[name] = number;
    }
    for (let name in phoneBookList) {
        console.log(name, '->', phoneBookList[name]);
    }
}
phoneBook(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']);