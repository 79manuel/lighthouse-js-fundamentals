# Recursion
Recursion is an alternative to traditional looping that allows you to do the same thing, just in a slightly different way. Recursion isn't necessarily a better way of doing this, it's just a different way of doing this.

In fact, some languages don't have any for or while loops, and recursion is the only way of repeating code like this.

Any problem that you can solve with a for loop, you can solve with recursion, and vice versa.
### Recursion By Example
```
let number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}
```
This is what that problem would look like using recursion instead of a for loop.
```
1.| function countEvenToTwelve(number) {
2.|   if (number <= 12) {
3.|     console.log(number);
4.|     countEvenToTwelve(number+2);
5.|   }
6.| }
7.| countEvenToTwelve(0);
```
A recursive function will call itself to execute code over and over again, kind of like a loop. And like a loop, it has to stop calling itself at some point so that it doesn't keep repeating forever.

As long as number <= 12, the function continues to call itself to repeat the code over and over again. As soon as number > 12, the function stops calling itself and the "looping" ends.

Each time countEvenToTwelve calls itself, on line 4, it passes in a different input value. In this case, each time the function is called, number will be 2 more than it was the last time. So the first time the function is called, number is equal to 0. The second time it's called, number is equal to 2, and so on. Instead of incrementing the number directly, like in the loop, the function calls itself again with a modified input parameter. Every time the function calls itself, number gets bigger and bigger. This is important, because the function will only stop calling itself when number is greater than 12.

This concept of a function calling itself inside itself can seem a little weird and jarring at first. If you've ever done this accidentally, your app probably crashed. How come this works? Why doesn't the function call itself forever?

Every recursive function must stop calling itself at some point, otherwise it will just continue to call itself forever, like an infinite loop. The following function never stops calling itself.
```
function countUpFrom(number) {
  console.log(number);
  countUpFrom(number+1);
}
countUpFrom(1);
```
- We refer to number <= 12 as a recursive case, because as long as this is true, the function will continue to call itself.
- We refer to number > 12 as a base case. If this is true, the function will not call itself

The recursive case is when the function will continue to call itself. Every time the function calls itself, the input gets closer and closer to the base case. The base case is when the function no longer calls itself. In a properly designed recursive function, with each recursive call, the input must gradually resolve toward the base case.

### Conclusion
Recursion is a tool you can use as an alternative to traditional iteration using for and while loops.

- Every recursive function must have a base case and a recursive case.
- Each recursive call should break down the current problem into a smaller, simpler one.
- The recursive calls must eventually reach the smallest version of the problem, the base case.
- The base case is when the problem can be solved without further recursion.

[Recursion example](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/Recursion/recursionExample.js)
### More recursion
```
const printItems = function(array) {
  array.forEach((item) => {
    if (Array.isArray(item)) {
      // Print out all it's items individually
      printItems(item);
    } else {
      console.log(item);
    }
  });
}
```

Main Problem:

printItems(["😎", ["💩", "🤗"], "😼", "😂"])

Sub Problem:

printItems(["💩", "🤗"])

The recursive case is when item is an array. We call the function again with that array.
The base case is when the item is not an array. We just log it out.
Here's what our function is doing:
```
printItems(["😎", ["💩", "🤗"], "😼", "😂"]) {

  // Item is not an array, so just log it
  console.log("😎")

  // Item is an array so call the function again
  printItems(["💩", "🤗"]) {

    // Item is not an array, so just log it
    console.log("💩")

    // Item is not an array, so just log it
    console.log("🤗")
  }

  // Item is not an array, so just log it
  console.log("😼")

  // Item is not an array, so just log it
  console.log("😂")
}
```
Now try running the function with an array that has more levels of nested arrays:
```
const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
```
It still works! Every time our function runs into an array, it calls itself again with that array until the current item is not an array. Then it just prints out the item. This is a very powerful function that was easy to implement and easy to read.

Recursion is such a good option here because the problem we're solving with the first array is the same problem for every nested array. It's just that each nested array is a smaller version of that main problem. This recursive function is also very easy to read. Developers should be able to look at this recursive function and be able to read through it with ease. Granted they have to be comfortable with recursion, but as developers, that's expected of us.