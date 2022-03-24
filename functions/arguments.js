
// TASK: tip calculator, to make a calculator which can find the tip given to waiters
console.log("tip calculator")
console.log()
let totalTip= function(bill, tip = .2){
    let total = bill*tip
   return `Total bill is $${bill}, and the maximum tip you can give is $${total}, as the maximum tip percentage is ${tip*100}%` // this is a template string with dynamic values
   //'Total Bill is: ' + bill + ', and the total tip is: ' + bill*tip
}

let givenTip = totalTip(40, 0.25)
console.log(givenTip)

console.log()
console.log()
console.log()

console.log(' --------------------------- Next Function--------------------------')

console.log()
console.log()

console.log("temperature converter")
console.log()
let convertFahrenheitToCelsius = function(F){
    let celsiusTemp = (F - 32)* 5/9
    return celsiusTemp
}

let temp = convertFahrenheitToCelsius(32)
let temp2 = convertFahrenheitToCelsius(68)

console.log(`the converted temperature is ${temp}C`)
console.log (`the converted temperature is ${temp2}C`)