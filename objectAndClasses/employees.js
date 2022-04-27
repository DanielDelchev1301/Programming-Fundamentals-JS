function employees(arr) {
    for (let curr of arr) {
        let obj = {};
        obj.name = curr;
        obj.personalNum = curr.length;
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNum}`);
    }
}
employees([
'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal']);