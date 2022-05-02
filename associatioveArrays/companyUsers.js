function companyUsers(arr) {
    let companies = {};
    for (let curr of arr) {
        let [company, employee] = curr.split(' -> ');
        if (companies.hasOwnProperty(company) === false) {
            companies[company] = new Set();
            companies[company].add(employee);
        } else {
            companies[company].add(employee);
        }
    }
    let sorted = Object.entries(companies)
    sorted.sort((a, b) => a[0].localeCompare(b[0]));
    for (let [company, setOfEmployees] of sorted) {
        let arrOfEmployees = Array.from(setOfEmployees)
        console.log(company);
        for (let employee of arrOfEmployees) {
            console.log(`-- ${employee}`);
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);