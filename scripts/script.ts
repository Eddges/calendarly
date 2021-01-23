const dayArray : string[] = [
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
]

const renderCalendar: (contextMonth : number | void) => void = (contextMonth) => {

    const monthNameElement = document.querySelector('.MonthName')
    const currentDateElement = document.querySelector('.CurrentDate')
    const datesElement = document.querySelector('.Dates')

    const newDate: Date = new Date();

    if(contextMonth) {
        newDate.setMonth(contextMonth)
    }

    const currentDateNumber : number = newDate.getDate()
    const currentDayNumber : number = newDate.getDay()
    const currentMonthNumber : number = newDate.getMonth()
    const currentYearNumber : number = newDate.getFullYear()

    const firstDayOfThisMonth : Date = new Date(2021, newDate.getMonth(), 1)
    const lastDayOfThisMonth : Date = new Date(2021, newDate.getMonth() + 1, 0)

    const currentDayOfTheWeek : number = firstDayOfThisMonth.getDay()
    const lastDateOfPrevMonth : number = new Date(2021, newDate.getMonth(), 0).getDate()

    if(monthNameElement) {
        monthNameElement.innerHTML = dayArray[currentMonthNumber]
    }
    if(currentDateElement) {
        currentDateElement.innerHTML = new Date().toDateString()
    }

    if(datesElement) {
        for(let i = lastDateOfPrevMonth - currentDayOfTheWeek + 1; i<=lastDateOfPrevMonth; i++){
            datesElement.innerHTML += `<span class='Date PrevDate'>${i}</span>`
        }
        for(let i = 1; i<=lastDayOfThisMonth.getDate(); i++) {
            datesElement.innerHTML += `<span class='Date ${i === new Date().getDate() && new Date().getMonth() === currentMonthNumber ? 'Active' : ''}'>${i}</span>`
        }
        for(let i = 1; i<= 7 - lastDayOfThisMonth.getDay() - 1; i++) {
            datesElement.innerHTML += `<span class='Date NextDate'>${i}</span>`
        }
    }
    
};

renderCalendar(3);
