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

interface EventObjectInterface {
    [key : string] : string

}

interface DateObjectInterface {
    date : EventObjectInterface[]
    // events : EventObjectInterface[]
}

const eventsArray : {[key : string] : EventObjectInterface } = {}

eventsArray['Mon Jan 26 2021'] = {
    'red' : "Mom's Birthday",
    'blue' : "Grocery Shopping",
}

// eventsArray['Mon Jan 26 2021'] = [
//         {
//         color : 'red',
//         value : "Mom's Birthday"
//         },
//         {
//             color : 'green',
//             value : "Grocery Shopping"
//         }
// ]

// const eventsArray : DateObjectInterface[] = []

// eventsArray.push({
//     date : 'Mon Jan 25 2021',
//     events : [
//         {
//         color : 'red',
//         value : 'Doctors Appointment'
//         },
//         {
//             color : 'green',
//             value : 'Grocery Shopping'
//         }
//     ]
// })


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
            datesElement.innerHTML += `<div class='Date PrevDate'>${i}</div>`
        }
        for(let i = 1; i<=lastDayOfThisMonth.getDate(); i++) {
            let eventsFlag = false
            const today = new Date(contextYear, contextMonth, i)
            const todayString = today.toDateString()

            if(eventsArray[todayString]) {
                
            }
            // eventsArray

            const numberSpan = `<span class='Number'>${i}</span>`
            const redEvent = `<span class='EventsElement Red'></span><span class='Hover NoDisplay'>Meet Mr Freeman and give him a hug</span>`
            const greenEvent = `<span class='EventsElement Blue'></span><span class='Hover NoDisplay'>Doctors Appointment</span>`
            const eventsDiv = `<div class='Events'>${redEvent}${greenEvent}</div>`
            eventsFlag = true
            datesElement.innerHTML += `<div class='Date ${i === new Date().getDate() && new Date().getMonth() === contextMonth && new Date().getFullYear() === contextYear ? 'Active' : ''}'>${numberSpan}${eventsFlag ? eventsDiv : ''}</div>`
        }
        for(let i = 1; i<= 7 - lastDayOfThisMonth.getDay() - 1; i++) {
            datesElement.innerHTML += `<div class='Date NextDate'>${i}</div>`
        }
    }

    document.querySelectorAll('.EventsElement').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.nextElementSibling?.classList.remove('NoDisplay')
        })
    })
    document.querySelectorAll('.EventsElement').forEach(item => {
        item.addEventListener('mouseout', () => {
            item.nextElementSibling?.classList.add('NoDisplay')
        })
    })
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
