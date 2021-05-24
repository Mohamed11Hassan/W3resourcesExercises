
let DateObject = new Date(),
    currentDay = (DateObject.getDate() + 1 < 10)? `0${DateObject.getDate() + 1}`: DateObject.getDate() + 1,
    currentMonth = (DateObject.getMonth() + 1 < 10)? `0${DateObject.getMonth() + 1}`: DateObject.getMonth() + 1,
    currentYear = DateObject.getFullYear();
    
console.log(`${currentMonth}-${currentDay}-${currentYear}`);
console.log(`${currentMonth}/${currentDay}/${currentYear}`);
console.log(`${currentDay}-${currentMonth}-${currentYear}`);
console.log(`${currentDay}/${currentMonth}/${currentYear}`);