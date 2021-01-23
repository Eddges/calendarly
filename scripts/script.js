var dayArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
var renderCalendar = function () {
    var monthNameElement = document.querySelector('.MonthName');
    var currentDateElement = document.querySelector('.CurrentDate');
    var datesElement = document.querySelector('.Dates');
    var newDate = new Date();
    var currentDateNumber = newDate.getDate();
    var currentDayNumber = newDate.getDay();
    var currentMonthNumber = newDate.getMonth();
    var currentYearNumber = newDate.getFullYear();
    var firstDayOfThisMonth = new Date(2021, newDate.getMonth(), 1);
    var lastDayOfThisMonth = new Date(2021, newDate.getMonth() + 1, 0);
    var currentDayOfTheWeek = firstDayOfThisMonth.getDay();
    var lastDateOfPrevMonth = new Date(2021, newDate.getMonth(), 0).getDate();
    console.log('last day of Month : ', lastDayOfThisMonth.getDate());
    if (monthNameElement) {
        monthNameElement.innerHTML = dayArray[currentMonthNumber];
    }
    if (currentDateElement) {
        currentDateElement.innerHTML = newDate.toDateString();
    }
    if (datesElement) {
        for (var i = lastDateOfPrevMonth - currentDayOfTheWeek + 1; i <= lastDateOfPrevMonth; i++) {
            datesElement.innerHTML += "<span class='Date PrevDate'>" + i + "</span>";
        }
        for (var i = 1; i <= lastDayOfThisMonth.getDate(); i++) {
            datesElement.innerHTML += "<span class='Date " + (i === currentDateNumber ? 'Active' : '') + "'>" + i + "</span>";
        }
    }
};
renderCalendar(0);
