function reverse(string){
  let reverseString =  string.split("").reverse().join("");
  return reverseString;
}

console.log(reverse("Hello"));