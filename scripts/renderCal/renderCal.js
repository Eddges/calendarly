"use strict";
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
var eventsArray = {};
eventsArray['Tue Jan 26 2021'] = {
    'red': "Mom's Birthday",
    'blue': "Grocery Shopping",
};
eventsArray['Wed Jan 27 2021'] = {
    'green': "Say Hello to Mr. Spiderman",
    'blue': "Assassinate 5 mosquitoes",
};
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
        for (var i = lastDateOfPrevMonth - currentDayOfTheWeek + 1; i <= lastDateOfPrevMonth; i++) {
            datesElement.innerHTML += "<div class='Date PrevDate'>" + i + "</div>";
        }
        for (var i = 1; i <= lastDayOfThisMonth.getDate(); i++) {
            var eventsFlag = false;
            var today = new Date(contextYear, contextMonth, i);
            var todayString = today.toDateString();
            console.log(todayString);
            var numberSpan = "<span class='Number'>" + i + "</span>";
            var redEvent = '';
            var greenEvent = '';
            var blueEvent = '';
            if (eventsArray[todayString]) {
                console.log('Matched');
                eventsFlag = true;
                if (eventsArray[todayString].red) {
                    redEvent = "<span class='EventsElement Red'></span><span class='Hover NoDisplay'>" + eventsArray[todayString].red + "</span>";
                }
                if (eventsArray[todayString].blue) {
                    greenEvent = "<span class='EventsElement Blue'></span><span class='Hover NoDisplay'>" + eventsArray[todayString].blue + "</span>";
                }
                if (eventsArray[todayString].green) {
                    blueEvent = "<span class='EventsElement Green'></span><span class='Hover NoDisplay'>" + eventsArray[todayString].green + "</span>";
                }
            }
            // eventsArray
            var eventsDiv = "<div class='Events'>" + (redEvent ? redEvent : '') + (greenEvent ? greenEvent : '') + (blueEvent ? blueEvent : '') + "</div>";
            datesElement.innerHTML += "<div class='Date " + (i === new Date().getDate() && new Date().getMonth() === contextMonth && new Date().getFullYear() === contextYear ? 'Active' : '') + "'>" + numberSpan + (eventsFlag ? eventsDiv : '') + "</div>";
        }
        for (var i = 1; i <= 7 - lastDayOfThisMonth.getDay() - 1; i++) {
            datesElement.innerHTML += "<div class='Date NextDate'>" + i + "</div>";
        }
    }
    document.querySelectorAll('.EventsElement').forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            var _a;
            (_a = item.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.remove('NoDisplay');
        });
    });
    document.querySelectorAll('.EventsElement').forEach(function (item) {
        item.addEventListener('mouseout', function () {
            var _a;
            (_a = item.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.add('NoDisplay');
        });
    });
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
