const raisinAlarm = function(cookie) {
  let includes = cookie.includes("🍇");
  if(includes){
    console.log('Raisin Alert!!!!');
  } else {
    console.log('All Good!');
  }
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));