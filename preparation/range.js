//Creating a long array of repeating numbers can be a time consuming task.
// Imagine creating an array of every even number from 0 to 100. In this challenge,
// we will build a function that creates an array like this for a given start, end, and step parameter.

//The function takes 3 integer parameters: start, end, and step.
// The function should return an array of numbers from start to end counting by step.

//The function should return an empty array [] if given incorrect parameters, such as:
//
// start, end, or step being undefined
// start being greater than end
// step being 0, or negative

//At some point in your code, you may want to use some_array.push(some_value)

function range(start, end, step){
  let array = [];
  if (start === 'undefined' || end === 'undefined' || step === 'undefined' || start > end || step <= 0) {
    array = [];
  } else {
    for (let i = start; i <= end; i+=step){
      array.push(i);
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
