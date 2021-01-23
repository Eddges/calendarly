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
var renderCalendar = function (contextMonth, contextYear) {
    var monthNameElement = document.querySelector('.MonthName');
    var currentDateElement = document.querySelector('.CurrentDate');
    var datesElement = document.querySelector('.Dates');
    var contextDate = new Date();
    contextDate.setMonth(contextMonth);
    contextDate.setFullYear(contextYear);
    var firstDayOfThisMonth = new Date(contextYear, contextDate.getMonth(), 1);
    var lastDayOfThisMonth = new Date(contextYear, contextDate.getMonth() + 1, 0);
    var currentDayOfTheWeek = firstDayOfThisMonth.getDay();
    var lastDateOfPrevMonth = new Date(2021, contextDate.getMonth(), 0).getDate();
    if (monthNameElement) {
        monthNameElement.innerHTML = dayArray[contextMonth] + (" " + contextYear);
    }
    if (currentDateElement) {
        currentDateElement.innerHTML = new Date().toDateString();
    }
    if (datesElement) {
        datesElement.innerHTML = '';
        for (var i = lastDateOfPrevMonth - currentDayOfTheWeek + 2; i <= lastDateOfPrevMonth; i++) {
            datesElement.innerHTML += "<span class='Date PrevDate'>" + i + "</span>";
        }
        for (var i = 1; i <= lastDayOfThisMonth.getDate(); i++) {
            datesElement.innerHTML += "<span class='Date " + (i === new Date().getDate() && new Date().getMonth() === contextMonth && new Date().getFullYear() === contextYear ? 'Active' : '') + "'>" + i + "</span>";
        }
        for (var i = 1; i <= 7 - lastDayOfThisMonth.getDay(); i++) {
            datesElement.innerHTML += "<span class='Date NextDate'>" + i + "</span>";
        }
    }
};
var monthCounter = 0;
var yearCounter = new Date().getFullYear();
renderCalendar(monthCounter, yearCounter);
var prevMonthChevron = document.querySelector('#prevMonth');
var nextMonthChevron = document.querySelector('#nextMonth');
if (prevMonthChevron) {
    prevMonthChevron.addEventListener('click', function () {
        monthCounter--;
        if (monthCounter < 0) {
            yearCounter--;
            monthCounter = 11;
        }
        renderCalendar(monthCounter, yearCounter);
    });
}
if (nextMonthChevron) {
    nextMonthChevron.addEventListener('click', function () {
        monthCounter++;
        if (monthCounter > 11) {
            yearCounter++;
            monthCounter = 0;
        }
        renderCalendar(monthCounter, yearCounter);
    });
}
