function flightSchedule(arr) {
    let allFlights = arr[0];
    let changedStatuses = arr[1];
    let flightStatus = arr[2];

    let flightList = {};

    for (let flight of allFlights) {
        let [flightSector, destination, rest] = flight.split(' ');
        let fullDestination = '';
        if (rest !== undefined) {
            fullDestination = destination + ' ' + rest;
            flightList[flightSector] = {
                Destination: fullDestination,
                Status: 'Ready to fly'
            };
        } else {
            flightList[flightSector] = {
                Destination: destination,
                Status: 'Ready to fly'
            };
        }
    }
    for (let changed of changedStatuses) {
        let [flightSector, status] = changed.split(' ');
        if (flightList.hasOwnProperty(flightSector)) {
            flightList[flightSector].Status = status
        };
    }
    for (let flight in flightList) {
        if (flightList[flight].Status === String(flightStatus)) {
            console.log(flightList[flight]);
        }
    }
}
flightSchedule([['WN269 Delaware','FL2269 Oregon',
'WN498 Las Vegas','WN3145 Ohio','WN612 Alabama',
'WN4010 New York','WN1173 California','DL2120 Texas',
'KL5744 Illinois','WN678 Pennsylvania'],
['DL2120 Cancelled','WN612 Cancelled',
'WN1173 Cancelled','SK430 Cancelled'],
['Cancelled']]);