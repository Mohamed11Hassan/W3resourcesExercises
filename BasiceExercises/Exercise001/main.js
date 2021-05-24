
let DaysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    DateObject = new Date(),
    currentDay = DateObject.getDay(),
    currentHour = (DateObject.getHours()% 12 === 0) ? DateObject.getHours() : DateObject.getHours() % 12,  
    currentMins = DateObject.getMinutes(),
    currentSecs = DateObject.getSeconds();
    amPmMode = (currentHour >= 12)? "PM": "AM";

    
console.log(DaysOfWeek[currentDay]);
console.log(`${(currentHour < 10) ? "0" + currentHour : currentHour}:${(currentMins < 10) ?  "0" + currentMins : currentMins}:${(currentSecs < 10) ? "0" + currentSecs : currentSecs} ${amPmMode}`);
