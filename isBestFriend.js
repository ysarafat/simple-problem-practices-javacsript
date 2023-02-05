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