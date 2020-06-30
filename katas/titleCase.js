const titleCase = function(string){

    console.log(/\b\s\w+/.exec(string));
}





titleCase("this is an example") // should return "This Is An Example"
// titleCase("test") // should return "Test"
// titleCase("i r cool") // should return "I R Cool"
// console.log(titleCase("WHAT HAPPENS HERE")) // should return "What Happens Here"
// titleCase("") // should return ""
// titleCase("A") // should return "A"