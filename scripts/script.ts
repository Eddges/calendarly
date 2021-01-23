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

const renderCalendar: (contextMonth : number, contextYear : number) => void = (contextMonth, contextYear) => {

    const monthNameElement = document.querySelector('.MonthName')
    const currentDateElement = document.querySelector('.CurrentDate')
    const datesElement = document.querySelector('.Dates')

    const contextDate: Date = new Date();

    contextDate.setMonth(contextMonth)
    contextDate.setFullYear(contextYear)

    const firstDayOfThisMonth : Date = new Date(contextYear, contextDate.getMonth(), 1)
    const lastDayOfThisMonth : Date = new Date(contextYear, contextDate.getMonth() + 1, 0)

    const currentDayOfTheWeek : number = firstDayOfThisMonth.getDay()
    const lastDateOfPrevMonth : number = new Date(2021, contextDate.getMonth(), 0).getDate()

    if(monthNameElement) {
        monthNameElement.innerHTML = dayArray[contextMonth] + ` ${contextYear}`
    }
    if(currentDateElement) {
        currentDateElement.innerHTML = new Date().toDateString()
    }

    if(datesElement) {
        datesElement.innerHTML = ''
        for(let i = lastDateOfPrevMonth - currentDayOfTheWeek + 1; i<=lastDateOfPrevMonth; i++){
            datesElement.innerHTML += `<span class='Date PrevDate'>${i}</span>`
        }
        for(let i = 1; i<=lastDayOfThisMonth.getDate(); i++) {
            datesElement.innerHTML += `<span class='Date ${i === new Date().getDate() && new Date().getMonth() === contextMonth && new Date().getFullYear() === contextYear ? 'Active' : ''}'>${i}</span>`
        }
        console.log(lastDayOfThisMonth.getDay())
        for(let i = 1; i<= 7 - lastDayOfThisMonth.getDay() - 1; i++) {
            datesElement.innerHTML += `<span class='Date NextDate'>${i}</span>`
        }
    }
    
};

let monthCounter = 0
let yearCounter = new Date().getFullYear()

renderCalendar(monthCounter, yearCounter);



const prevMonthChevron = document.querySelector('#prevMonth')
const nextMonthChevron = document.querySelector('#nextMonth')

if(prevMonthChevron) {
    prevMonthChevron.addEventListener('click', () => {
        monthCounter--
        if(monthCounter<0) {
            yearCounter--
            monthCounter = 11
        }
        renderCalendar(monthCounter, yearCounter)
    })
}

if(nextMonthChevron) {
    nextMonthChevron.addEventListener('click', () => {
        monthCounter++
        if(monthCounter>11) {
            yearCounter++
            monthCounter = 0
        }
        renderCalendar(monthCounter, yearCounter)
    })
}
