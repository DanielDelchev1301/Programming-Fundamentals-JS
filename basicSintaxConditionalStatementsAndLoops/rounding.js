function rounding(num,precision) {
    if (precision > 15) {
        precision = 15;
    }
    let noZeros = num.toString();
    noZeros = parseFloat(num.toFixed(second));
    console.log(noZeros);
}
rounding(3.1415273429479823742897424,2);

function rounding(num, precision) {
    first = Number(num);
    second = Number(precision);
    if ( precision > 15) {
        precision = 15;
    }
    num = num.toFixed(precision);
    console.log(parseFloat(num));
}
rounding(10.5, 3);