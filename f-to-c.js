function FahrenheitToCelsius(Fahrenheit){
    const calculation = (Fahrenheit-32)*5/9
    const fixedNumber = calculation.toFixed(2);
    const result = parseFloat(fixedNumber);
    return result;

}
const Fahrenheit = 10;
const inputs = FahrenheitToCelsius(Fahrenheit)
console.log(inputs , "Degree Celsius");