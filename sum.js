function oneTon(number){
    let sumetion = 0;
    for(let i =0; i<=number; i++){
       sumetion = (sumetion +i);
    }
    return sumetion;
}
const myNumber = 10;
const inputNum = oneTon(myNumber);
console.log(inputNum);
