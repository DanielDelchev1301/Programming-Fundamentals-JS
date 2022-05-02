function meetings(arr) {
    let meetingList = {};
    for (let data of arr) {
        let [day, name] = data.split(' ');
        if (meetingList.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetingList[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }
    for (let day in meetingList) {
        console.log(`${day} -> ${meetingList[day]}`);
    }
}
meetings(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']);