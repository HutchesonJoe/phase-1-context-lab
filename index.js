/* Your Code Here */

function createEmployeeRecord(array){
    let employeeRecord = {
        firstName : array[0],
        familyName : array[1],
        title : array[2],
        payPerHour : array[3],
        timeInEvents : [],
        timeOutEvents : []
    }
    return employeeRecord
}

function createEmployeeRecords(arrayOfArrays){
    let employeeRecords = arrayOfArrays.map(empl => createEmployeeRecord(empl));
    return employeeRecords
}

function createTimeInEvent(dateStamp){
    let splitStamp = dateStamp.split(" ")
    let newEvent = {
        type: "TimeIn",
        hour: parseInt(splitStamp[1]),
        date: splitStamp[0]
    }
    this.timeInEvents.push(newEvent)
    return this 
}

function createTimeOutEvent(dateStamp){
    let splitStamp = dateStamp.split(" ")
    let newEvent = {
        type: "TimeOut",
        hour: parseInt(splitStamp[1]),
        date: splitStamp[0]
    }
    this.timeOutEvents.push(newEvent)
    return this
}
//problem: take a date and find the number of hours worked on that date. 
function hoursWorkedOnDate(date){
     let datesWorkedArray = this.timeInEvents
    for (let dateWorked of datesWorkedArray){
        if (dateWorked.date === date){
            let outDate = this.timeOutEvents.find(outDate => outDate.date === date)
         return (outDate.hour - dateWorked.hour)/100
            }
        }   
}

function wagesEarnedOnDate(date){
    let hoursWorked = hoursWorkedOnDate.call(this, date);
    let payRate = this.payPerHour
    return hoursWorked * payRate
}

function findEmployeeByFirstName(srcArray, firstName){
    let thisEmployee = srcArray.find(emp => emp.firstName === firstName);
    return thisEmployee
}

function calculatePayroll(array){
    let wages = array.map(emp => allWagesFor.call(emp))
    return wages.reduce((x,y) => x + y)
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    debugger
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
debugger
    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

