function gramophone(band, album, song) {
    let time = (album.length * band.length) * song.length / 2;
    let rotated = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotated} times.`); 
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');