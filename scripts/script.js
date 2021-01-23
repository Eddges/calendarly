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
    var today = new Date();
    console.log('Month : ', today.getMonth());
    if (monthNameElement) {
        monthNameElement.innerHTML = dayArray[today.getMonth()];
    }
    if (currentDateElement) {
        currentDateElement.innerHTML = today.toDateString();
    }
};
renderCalendar(0);
