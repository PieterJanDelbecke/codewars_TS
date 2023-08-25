function friend(friends) {
  const myFriends = [];
  friends.forEach((friend) => {
    if (friend.length === 4) myFriends.push(friend);
  });
  return myFriends;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
