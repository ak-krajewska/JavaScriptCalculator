//chunking out based on a divider


//just use str.split and make a regular expression of the dividers, I think this will work




function parseAString(string, dividers){ //takes a string, and an array of accepted dividers

}

var regex = /[\+*/-]/;
var str = "12.3+20-3.7*4/5";
//console.log(str.split(regex));



//travesre the array
//for each item in the array check if it has a decimal

//this is so much work. If I'm going to write arrays I might as well work with arrays

var parsedArr = str.split(regex);
console.log(parsedArr);
var decimal = ".";

//traverse the parsed array and check for a decimal -- this works
for (var i = 0; i < parsedArr.length; i++){
    if (parsedArr[i].indexOf(".") !== -1){
        console.log(parsedArr[i] + " contains a decimal");
    };
};

