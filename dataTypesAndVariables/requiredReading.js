function requiredReading(pages, readPagesPerHour, days) {
    let totalTime = pages / readPagesPerHour;
    let timePerDay = totalTime / days;
    console.log(timePerDay);
}
requiredReading(212, 20, 2);