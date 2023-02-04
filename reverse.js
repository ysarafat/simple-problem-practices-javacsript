// reverse words
function reverse(word){
    let reverseWord = "";
    for(var i = word.length-1; i >= 0 ; i--){
        const element = word[i];
        reverseWord = reverseWord + element;

    }
    return reverseWord;
}
const myStr = "Hello Arafat";
const getWord = reverse(myStr);
console.log(getWord);

// reverse sentantens
function reverseSen(word){
    let elements = word.split(" ")
    let reverseSentance = " ";
    for(let i = elements.length-1 ; i >= 0 ; i--){
        const element = elements[i];
        reverseSentance = reverseSentance + element;
    }
    const result = reverseSentance;
    return result;
}
const getSentance = reverseSen(myStr);
console.log(getSentance);
