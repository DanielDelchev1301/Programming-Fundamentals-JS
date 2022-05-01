function schoolRegister(data) {
    return data.reduce((a, b) => {
        let tuples = b.split(', ');

        a.push(tuples.reduce((a, b) => {
            let [k, v] = b.split(': ');
            a[k] = v;
            return a;
        }, {}));

        return a;
    }, [])
        .filter(e => e['Graduated with an average score'] >= 3)
        .sort((a, b) => a['Grade'] - b['Grade'])
        .map(e => {
            e['Grade'] = Number(e['Grade']) + 1;
            return e;
        })
        .reduce((a, b) => {
            let entries = Object.entries(b);
            if (a.filter(e => e.Grade == entries[1][1]).length == 0) {
                a.push({
                    ['Grade']: entries[1][1],
                    ['List of students']: [entries[0][1]],
                    ['Average annual grade from last year']: [entries[2][1]]
                })
            } else {
                let obj = a.filter(e => e.Grade == entries[1][1])[0];
                obj['List of students'].push(entries[0][1]);
                obj['Average annual grade from last year'].push(entries[2][1]);
            }
            return a;
        }, [])
        .forEach(x => {
            console.log(`${Object.values(x)[0]} Grade 
List of students: ${Object.values(x)[1].join(', ')}
Average annual grade from last year: ${(Object.values(x)[2].map(Number).reduce((a, b) => a + b) / Object.values(x)[2].length).toFixed(2)}`
            )
            console.log();
        });
}
schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15']);