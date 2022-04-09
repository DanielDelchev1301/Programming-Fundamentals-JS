function formatGrade(num) {
    let grade = num.toFixed(2);
    let description = '';

    if (grade < 3) {
        grade = '2';
        description = 'Fail';
    } else if (grade < 3.5) {
        description = 'Poor';
    } else if (grade < 4.5) {
        description = 'Good';
    } else if (grade < 5.5) {
        description = 'Very good';
    } else {
        description = 'Excellent';
    }
    console.log(`${description} (${grade})`);
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);