function movies(arr) {
    let listOfMovies = [];
    for (let curr of arr) {
        if (curr.includes('addMovie')) {
            let nameOfMovie = curr.split('addMovie ')[1];
            listOfMovies.push({ name: nameOfMovie });
        } else if (curr.includes('directedBy')) {
            let tokens = curr.split(' directedBy ');
            let name = tokens[0];
            let director = tokens[1];
            let movie = listOfMovies.find((movieObject) => movieObject.name === name);
            if (movie) {
                movie.director = director;
            }
        } else if (curr.includes('onDate')) {
            let tokens = curr.split(' onDate ');
            let name = tokens[0];
            let date = tokens[1];
            let movie = listOfMovies.find((movieObject) => movieObject.name === name);
            if (movie) {
                movie.date = date;
            }
        }
    }
    for (let movie of listOfMovies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]);