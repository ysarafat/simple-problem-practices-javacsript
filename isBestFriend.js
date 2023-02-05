function isBestFriend(friends1, friends2) {
  if (friends1.name === friends2.friend) {
    return true;
  } else {
    return false;
  }
}
const friends1 = { name: "abul", friend: "babul" };
const friends2 = { name: "babul", friend: "abul" };
const inputs = isBestFriend(friends1, friends2);
console.log(inputs);

// unsolved problems

// function bestFriend(names){
//  const allName = names.split('')
//  console.log(allName);
 
//   for(let i =0; i < names.length; i++){
//     const element = names[i];
    
    
//   }
//   console.log(largestName);
// }
//   const friendName = ['Nabila', 'Indubalafff', 'Piya', 'Misha', 'Rajlokki', 'Porinita'];
//   const allFriend = bestFriend(friendName);
//   console.log(allFriend);