function addressBook(arr) {
    let addressList = {};
    for (let data of arr) {
        let [name, address] = data.split(':');
        addressList[name] = address;
    }
    let entries = Object.entries(addressList);
    entries.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, address] of entries) {
        console.log(name, '->', address);
    }
}
addressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']);