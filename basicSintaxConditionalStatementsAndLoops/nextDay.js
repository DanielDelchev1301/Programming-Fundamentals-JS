function nextDay(year, month, day) {
    day++;
    if (day > 30) {
        day = 1;
        month++;
    }
    if (month > 12) {
        month = 1;
        year++;
    }
    if (year < 2) {
        year = 1900;
        year++;
    }
    console.log(`${year}-${month}-${day}`);
}
nextDay(1999, 01, 30);

function nextDay(year, month, day) {
    let date = new Date (year, month, day);
    year = date.getFullYear();
    month = date.getMonth();
    day = date.getDate() + 1;

    if (day > 30) {
        month = date.getMonth() + 1;
        day = 1;
    }
    if (month === 0) {
        year = date.getFullYear() - 1;
        month = 12;
    } 
    console.log(`${year}-${month}-${day}`);
}
nextDay(1951, 12, 24);