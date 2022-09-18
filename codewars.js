// import moment from "moment"

function dateToUnix(dateStr){
    const date = new Date(dateStr)
    return Math.floor(date.getTime()/1000)
}


console.log(dateToUnix("2022-06-22"))

// const dateStr = '2022-06-22'
// console.log(date)

// console.log(unixTimeStamp)

