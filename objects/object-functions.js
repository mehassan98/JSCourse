//To create a function which takes value in F and returns in both C and K
//Create an object as well

let fahrenheit=32

let outsideTemp ={
    fahrenheit: fahrenheit,
    celsius: (fahrenheit - 32)* (5/9),
    kelvin: (fahrenheit)*(5/9) +273.15
}
let getOutsideTemp = function(){
    return {
        tempCelsius: `${outsideTemp.celsius}`,
        tempFahrenheit: `${outsideTemp.fahrenheit}`,
        tempKelvin: `${outsideTemp.kelvin}`
    }
}

let allTemperatures = getOutsideTemp(outsideTemp)
console.log(allTemperatures)
