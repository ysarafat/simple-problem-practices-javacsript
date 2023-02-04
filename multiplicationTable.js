function multiplicationTable(number){
    for (i = 1 ; i <= 10 ; i++){
        const calculaton = i*number;
        const result = i + "*" + number;
        const filnalResult = result + "=" + calculaton;
        console.log(filnalResult);
    }
}
const inputNumber = multiplicationTable(2);
