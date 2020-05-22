# 1. Raisin' Arizona Challenge

## Exercise

In this exercise, you will write a function that identifies whether a supposedly chocolate chip cookie also has raisins in it. Your function, raisinAlarm, will receive a cookie which is an array of chocolate chips ("🍫"). However, there is a chance that there might be a pesky raisin in the array as well ("🍇"). Your function must search through the array to see whether or not a raisin is present.

If your function detects a raisin, it should return "Raisin alert!". If no raisin is present, your function should return "All good!".

## Starter Code

```
const raisinAlarm = function(cookie) {
  // Put your solution here
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));
```
## Expected output
```
Raisin alert!
Raisin alert!
All good!
```

# 2. Objects - Sales Tax Challenge

## Challenge

Given the following data, implement a function calculateSalesTax that calculates the total sales and total tax, grouped by company.
```
const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
```
The function should look like this:
```
const calculateSalesTax = function(salesData, taxRates) {
  // Implement your code here
}
```
# Hints
Break down the problem into step-by-step pseudo-code (try pen and paper sketching, thinking "top-down" vs "bottom-up", pairing--whatever feels right to you!), and use console.log statements to debug and check your assumptions.

Don't be afraid to write additional functions if it helps you reason about your code! Sometimes even a very simple function like calculateTax(sales, taxRate) (calculating tax on a single dollar amount with a known rate) can help by giving the operation a name. What other small operations would partially solve this problem?

Naming your variables clearly and descriptively will help avoid confusion.

If you try to access an object attribute (property) that does not exist, then it will return undefined. This is important to know - if you are encountering undefined issues you may be falsely assuming that an attribute exists. Remember undefined is a "falsey" value.

