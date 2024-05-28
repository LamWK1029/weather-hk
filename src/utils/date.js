// variable
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const weekDay = today.getDay();
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const weekDayEn = weekDays[weekDay];

export { today, day, month, year, weekDay, weekDayEn };
