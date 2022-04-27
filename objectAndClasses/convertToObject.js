function convertToObject(json) {
    let parseToObject = JSON.parse(json);
    let entries = Object.entries(parseToObject);
    for (let [key, value] of entries) {
        console.log(`${key}: ${value}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');