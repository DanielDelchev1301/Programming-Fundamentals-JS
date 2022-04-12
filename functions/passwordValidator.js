function passwordValidator(pass) {
    //This is longer variant with nested function ==> to experience them :)
    let isValid = true;
    if (passLength(pass) == true) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if (consistOnlyLettersAndDigits(pass) == false) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }
    if (atLeastTwoDigits(pass) == false) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    if(isValid) {
        console.log('Password is valid');
    }

    function passLength(pass) {
        return pass.length < 6 || pass.length > 10 ? true : false; 
    }

    function consistOnlyLettersAndDigits(pass) {
        let onlyLettersAndDigits = true;
        for (let i = 0; i < pass.length; i++) {
            let code = pass.charCodeAt(i);
            if (code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 123) {
                onlyLettersAndDigits = false;
            }
        }
        return onlyLettersAndDigits ? true : false;
    }

    function atLeastTwoDigits(pass) {
        let digitsCounter = 0;
        let check = true;
        for (let i = 0; i < pass.length; i++) {
            let code = pass.charCodeAt(i);
            if (code > 47 && code < 58) {
                digitsCounter++;
            }
        }
        if (digitsCounter < 2) {
            check = false;
        }
        return check ? true : false;
    }

    // This is my first shorter solve, without nested functions ==>

    /*let onlyLetters = true;
    let digitsCounter = 0;
    let isValid = true;
    for (let i = 0; i < pass.length; i++) {
        let code = pass.charCodeAt(i);
        if (code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 123) {
            onlyLetters = false;
        }
        if (code > 47 && code < 58) {
            digitsCounter++;
        }
    }
    if (pass.length < 6 || pass.length > 10) {
        console.log('Password must be between 6 and 10 characters');
        isValid = false;
    }
    if (onlyLetters === false) {
        console.log('Password must consist only of letters and digits');
        isValid = false;
    }
    if (digitsCounter < 2) {
        console.log('Password must have at least 2 digits');
        isValid = false;
    }
    if (isValid === true) {
        console.log('Password is valid');
    }*/
}
passwordValidator('logIn');