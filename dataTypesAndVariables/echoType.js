function echoType(type) {
    if (typeof(type) === 'number' || typeof(type) === 'string') {
        console.log(typeof(type));
        console.log(type);
    } else {
        console.log(typeof(type));
        console.log('Parameter is not suitable for printing');
    }
}
echoType(null);