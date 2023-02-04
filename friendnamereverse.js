function friendNameReverse(friend1, friend2) {
  const firstFriend = friend1.length;
  const LastFriend = friend2.length;
  if (firstFriend > LastFriend) {
    const name1 = friend1.split("").reverse().join("");
    return name1;
  } else if (LastFriend > firstFriend) {
    const name2 = friend2.split("").reverse().join("");
    return name2;
  } else {
    return " Name langth is same";
  }
}

const firstFriend = "Khadija";
const LastFriend = "Arafat";
const getName = friendNameReverse(firstFriend, LastFriend);
console.log(getName);
