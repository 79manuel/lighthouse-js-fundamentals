function whichSchool(age){
  if(age <= 13){
    return `If you are ${age} years old, you should go to Elementary School`;
  } else if (age > 13 && age <= 18){
    return `If you are ${age} years old, you should go to Secondary School`;
  } else {
    return 'You should take the Lighthouse Bootcamp';
  }
}

console.log(whichSchool(16));