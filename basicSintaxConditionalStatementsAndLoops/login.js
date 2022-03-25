function login(user) {
    let username = user.shift();
    let splitpass = username.split('');
    let splitreversepass = splitpass.reverse();
    let truepass = splitreversepass.join('');
    for (let i = 1; i <= 4; i++) {
        pass = user.shift();
        if (truepass === pass) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (i === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
    }
}
login(['Acer','login','go','let me in','recA']);