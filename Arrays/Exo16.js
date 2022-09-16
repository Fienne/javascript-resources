// let isLeapYear = (year) => {
//     if (year % 4 == 0 && year % 400 === 0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(isLeapYear(9))

function isLeapYear(year){
	if(year % 400 === 0 && year % 4 === 0){
      return true
    } else {
      return false
    }
}

console.log(isLeapYear(2004))