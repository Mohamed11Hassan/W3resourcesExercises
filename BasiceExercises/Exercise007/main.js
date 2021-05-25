
function isSomedayChecker(beginYear, endYear, month, dayNumber) {

    let dateObject = new Date(),
    result = [];
    dateObject.setFullYear(beginYear);
    dateObject.setMonth(month);
    dateObject.setDate(dayNumber);

    for(let year = beginYear; beginYear <= endYear; beginYear++) {

        dateObject.setFullYear(beginYear);

        if(dateObject.getDay() === 0) {
            result.push(`this is year ${dateObject.getFullYear()} ${dateObject.getDate()}st of month num ${dateObject.getMonth()} and day ${dateObject.getDay()} => sunday`)
        }

    }

    return result;
}

let res = isSomedayChecker(2014, 2050, 1, 1);

res.forEach(function(y) {
    console.log(y);
});



