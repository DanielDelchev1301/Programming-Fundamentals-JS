function convertToJSON(firstName, lastName, hairColor) {
    let obj = {};
    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hairColor;
    let objToJSON = JSON.stringify(obj);
    console.log(objToJSON);
}
convertToJSON('George', 'Jones', 'Brown');