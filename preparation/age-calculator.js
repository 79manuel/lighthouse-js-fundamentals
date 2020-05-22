function ageCalculator(name, yearOfBirth, currentYear){
  let currentAge = currentYear - yearOfBirth;
  return `${name} is ${currentAge} years old`;
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));