function songs(arr) {
    let num = arr.shift();
    let type = arr.pop();
    let songs = [];
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    for (let i = 0; i < num; i++) {
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (type === 'all') {
        songs.forEach((x) => console.log(x.name));
    } else {
        let filtered = songs.filter((x) => x.type === type);
        filtered.forEach((x) => console.log(x.name));
    }
}
songs([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite']);