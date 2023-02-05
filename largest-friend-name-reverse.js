function bestFriend(names) {
    let bigname = "";
    for (let i = 0; i < names.length; i++) {
      const friends = names[i];
      if (friends.length > bigname.length) {
        bigname = friends;
      } else if (friends.length === bigname.length) {
        return "name length is same, Please input a big length name.";
      }
    }
    const reverse = bigname.split("").reverse().join("");
    return reverse;
  }
  const friendName = [
    "Yeasir Arafat",
    "Arafat",
    "Piya",
    "Misha",
    "Sakib",
    "Aman",
    "Mizan",
  ];
  const allFriend = bestFriend(friendName);
  console.log(allFriend);
  