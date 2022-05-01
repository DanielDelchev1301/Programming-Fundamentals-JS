function towns(arr) {
    for (let curr of arr) {
        let [town, latitude, longitude] = curr.split(' | ');
        let obj = {};
        obj.town = town;
        obj.latitude = Number(latitude).toFixed(2);
        obj.longitude = Number(longitude).toFixed(2);
        console.log(obj);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']);