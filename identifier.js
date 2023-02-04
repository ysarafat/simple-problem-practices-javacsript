function count(numbersList){
    let countList = 0;
    for(let i = 0; i<numbersList.length; i++){
        const element = numbersList[i];
        if (element > 25){
            countList = countList+1;
        }
        
    }
    
    return countList;
    
}

const myAllNumbers = [12, 25, 24, -45, 47, 78, 5, 2, -99 , -55, 47, 587,11 , 14, 25, 24, 31, 19, 18,25];
const inputInFunction = count(myAllNumbers);
console.log(inputInFunction);
// check in the myallnumber array 250 
const search = myAllNumbers.includes(250)
console.log(search);