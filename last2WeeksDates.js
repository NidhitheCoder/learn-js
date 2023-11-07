const getDateRangeByGivenDate = (selectedDate) => {

    const weekDay = selectedDate.getDay();
    lastDayDate = selectedDate.getDate() + (6 - weekDay)
    const lastDay = new Date(selectedDate), firstDay = new Date(selectedDate);
    lastDay.setDate(lastDayDate)

    const startOfCurrentWeek = selectedDate.getDate() - weekDay;
    firstDay.setDate(startOfCurrentWeek - 7)
    const dateLists = [];

    while (firstDay <= lastDay) {
        dateLists.push(new Date(firstDay))
        firstDay.setDate(firstDay.getDate() + 1)
    }

    return dateLists;
}

const WeekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const givenDate = new Date('2023-10-15')
// This dateLists have all the dates you need to show
const dateLists = getDateRangeByGivenDate(givenDate);

