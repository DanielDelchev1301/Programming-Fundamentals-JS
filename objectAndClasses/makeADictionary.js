function makeADictionary(jsonStringArr) {
    let dictionary = {};
    for (let curr of jsonStringArr) {
        let obj = JSON.parse(curr);
        dictionary = Object.assign(dictionary, obj);
    }
    console.log(dictionary)
    let sortKeys = Object.keys(dictionary);
    sortKeys.sort((a, b) => a.localeCompare(b));
    for (let term of sortKeys) {
        let definition = dictionary[term];
        console.log(`Term: ${term} => Definition: ${definition}`);
    }
}
makeADictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);