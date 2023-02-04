function isBestFriend(friends1, friends2) {
  if (friends1.name === friends2.friend) {
    console.log(true);
  } else {
    console.log(false);
  }
}
const friends1 = { name: "abul", friend: "babul" };
const friends2 = { name: "babul", friend: "abul" };
const inputs = isBestFriend(friends1, friends2);
