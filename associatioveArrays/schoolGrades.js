function schoolGrades(arr) {
    let studentsList = {};
    for (let currLine of arr) {
        let tokens = currLine.split(' ');
        let name = tokens.shift('');
        let grades = tokens.map(Number);
        if (!studentsList.hasOwnProperty(name)) {
            studentsList[name] = [];
        }
        let existing = studentsList[name];
        for (let grade of grades) {
            existing.push(grade);
        }
    }
    let sorted = Object.entries(studentsList);
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [name, grades] of sorted) {
        let average = 0;
        for (let grade of grades) {
            average += grade;
        }
        average /= grades.length;
        console.log(`${name}: ${average.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']);