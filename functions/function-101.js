/*
let greetUser = function(){ // function syntax or structure
    console.log('welcome to my 1st function!')
}
// to call the function
greetUser() // o/p should be what is written inside console.log
*/

// function to convert fahrenheit into celsius

let convertFahrenheitToCelsius = function(F){
    let celsiusTemp = (F - 32)* 5/9
    return celsiusTemp
}

let temp = convertFahrenheitToCelsius(100)
let temp2 = convertFahrenheitToCelsius(68)

console.log(temp, "c")
console.log (temp2, "c")