function radianToDegree(radian){
    const calculation = radian*180/3.14159265359;
    const fixedNumber = calculation.toFixed(2);
    const result = parseFloat(fixedNumber);
    return result;

}
const radian = 1;
const inputs = radianToDegree(radian)
console.log(inputs, "Degree");

