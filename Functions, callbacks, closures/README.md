# 1. JavaScript Functions as Objects

One of the distinctive things about JavaScript is that functions are first-class objects.

This means two important things:

- Functions can be stored in variables and passed around
- Functions can do everything that other objects can do (like having properties assigned to them)

## Callback Functions
The most notable usage of having functions as values in JavaScript is a callback function.

A callback function:

- Is a function passed (by reference) into another function (let's call that one the "receiver" function)
- The receiver function is therefore accepting behavior to perform by calling the callback function that it now has access to
- The receiver function can decide to call the callback function at any time, as many times as it wants
```
// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      found();   // execute callback
    }
  }
}

const actionWhenFound = function() {
  console.log("Found him!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
```
This code illustrates how a function can be treated as an ordinary value and passed around to another function. We pass a reference to the function named actionWhenFound as an argument to another function findWaldo.

The function actionWhenFound is known as a callback function. It is first defined, then passed as an argument to another function, and finally executed once a specific event occurs.

## Exercise 1 - Callback Arguments

Modify the callback function in the previous example so that it accepts a single argument index and logs it. The problem should therefore output something like "Found Waldo at index 2!".

- Copy the waldo searching code above into the JS file
- Run it via terminal to make sure that it is working as expected
- Modify the actionWhenFound function to let it receive and use the index
- Modify the findWaldo function so that it passes the index array to the callback

[Callback Arguments](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/Day_4/findWaldo.js)

## Exercise 2 - Array forEach

A very common implementation of callback functions is with forEach which uses callbacks to allow us to easily iterate through the elements of an array.

Read about iterating through elements of an array using JavaScript's [Array.prototype.forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp) method.

Refactor the function findWaldo to use the forEach() method instead of a for loop.

[Array forEach](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/Day_4/findWaldo.js)

## Conclusion

Up until now, we knew we could pass data into functions. We just learned that in languages like JS it is possible to actually also pass behavior into functions.

We realize this after learning that functions are values and can be treated as such. We learned that in JS, functions are in fact actually objects. That said, our focus is not on assigning properties (keys) to functions, and instead on passing them as values into other functions. This allows us to pass behavior into other functions.

Functions that are passed in like this are referred to as callbacks or callback functions.

This seemingly odd use of functions opens up interesting possibilities when thinking about what types of functions we can create. We looked at forEach as a very common use-case for callbacks.

# 2. Anonymous Functions
The code example in the previous Functions As Objects exercise illustrated a (slightly oversimplified) case where a result is passed from one function (findWaldo) to a callback function.

Often a callback function would not be declared or assigned to a variable, but rather would be inline like this:
```
findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
console.log("Waldo is located at:", index);
});
```
We can notice here that the callback function defined "inline" here (function(result) { ... }) is not named, nor assigned to a variable. It exists only as an anonymous function, which is invoked by the function it gets passed into – in this example findWaldo.

Anonymous functions are often declared while being passed in as callbacks to other functions. Why? Because the receiving function that takes in the anonymous function will give that parameter a name anyway.

## Exercise - Refactor findWaldo

[Refactor findWaldo](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/Day_4/findWaldoAnonymously.js)
# 3.Filtering Using Callbacks
Another application of callback functions appears when we iterate over an array of values in order to filter down the values into a smaller list.

- JavaScript's Array offers a filter method that we can use to iterate through the elements and return either true or false - indicating whether the element should be included in the results.
- The [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) method creates a new array with all elements that pass the test implemented by the provided function.

Let's see it in action.
```
const numbers = [1, 2, 3, 4, 5, 7, 10, 14, 17, 18];
const evens = numbers.filter(function(num) {
 return (num % 2 == 0);
});
console.log("Subset of even numbers:", evens);
````

## Challenge

[Filter the list down to only passing grades.](https://github.com/79manuel/lighthouse-js-fundamentals/blob/master/Day_4/passingGradesOnly.js)

# 4. Higher-Order Functions
Functions that take in callbacks are referred to as Higher Order Functions.

Higher-Order functions are any functions which operate on other functions.
This includes, but is not limited to, functions which take in functions (callbacks) as arguments.

This means that built-in functions such as forEach, filter, and others can be called "Higher-Order Functions".

# Map()
map calls a provided callback function once for each element in an array, in order, and constructs a new array from the results. callback is invoked only for indexes of the array which have assigned values (including undefined).
```
const array1 = [1, 4, 9, 16];
   
// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

### When not to use map()
Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use forEach or for-of instead.

You shouldn't be using map if:

- you're not using the array it returns; and/or
- you're not returning a value from the callback.