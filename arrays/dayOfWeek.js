function dayOfWeek(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let currentDay = days[day - 1];
    if (day >= 1 && day <= 7) {
        console.log(currentDay);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(0);