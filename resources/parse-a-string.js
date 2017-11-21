//chunking out based on a divider


//just use str.split and make a regular expression of the dividers, I think this will work




function parseAString(string, dividers){ //takes a string, and an array of accepted dividers

}

var regex = /[\+*/-]/;
var str = "1+2-3*4/5";
//console.log(str.split(regex));

var str2 = "14+17+19*20";
//console.log(str2.split("+"));

//travesre the array
//for each item in the array check if it has a decimal

//this is so much work. If I'm going to write arrays I might as well work with arrays

var parsedArr = str.split(regex);
console.log(parsedArr);