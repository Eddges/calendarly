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

const renderCalendar: (contextMonth : number) => void = () => {

    const monthNameElement = document.querySelector('.MonthName')
    const currentDateElement = document.querySelector('.CurrentDate')

    const today: Date = new Date();
    console.log('Month : ', today.getMonth())

    if(monthNameElement) {
        monthNameElement.innerHTML = dayArray[today.getMonth()]
    }
    if(currentDateElement) {
        currentDateElement.innerHTML = today.toDateString()
    }
    
};

renderCalendar(0);
