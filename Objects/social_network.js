const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

let followersName = '';

function biggestFollower() {
  let longestLength = 0;
  let longestArray = [ ];
  for (let follower in data) {
    let followers = data[follower].follows;
    let name = data[follower].name;
    if(followers.length > longestLength) {
      longestArray = followers;
      longestLength = followers.length;
      followersName = name;
    } else if (followers.length === longestLength){
      longestArray.push(longestLength);
      followersName = name;
    }
  }
  return followersName;
}
console.log(biggestFollower());

function mostPopular() {
  //Which follower number is most repeated in follows array?

}