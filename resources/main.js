//I'd like to create a debug mode where the console logs are active

//global variables
var box = document.getElementById('display');
var allowedNums = ["0","1","2","3","4","5","6","7","8","9"];
var allowedOperators = ["+", "-", "*", "/"];
var hasDecimal = false; //toggle for tracking if a chunk has a decimal

function addToScreen(x){    
    //you want to enter a number
    if (allowedNums.indexOf(x) != -1){
                console.log("It's a number, so you can enter it");
                //no leading zero, no zero directly after an operator
                if (((x == 0) && (box.value.length == 0)) || (x == 0) && (allowedOperators.indexOf(box.value.charAt(box.value.length - 1)) != -1) ){
                console.log("no leading zero allowed");
                } else 
                    box.value += x;
            }
    
    //allow only one decimal point per chunk of numerals
    //you want to enter a decimal point
    if (x == "."){
        if (hasDecimal == true){
        console.log("already has a decimal");
        } else if (hasDecimal == false){
            hasDecimal = true;
            console.log("a decimal point has been added");
            //if you are following an operator or the box is empty
            if (box.value == "" || allowedOperators.indexOf(box.value.charAt(box.value.length - 1)) !== -1) {
                //add "0." instead of "."
                box.value += "0.";
                } else {
                    box.value +=x;
                }
        }
    }
    
    //if want to enter a math operator
    if(allowedOperators.indexOf(x) != -1) {
        //check if the last char of what's currently in the box is a number
        console.log(x + " is an operator");
        if (allowedNums.indexOf(box.value.charAt(box.value.length - 1)) === -1){
           console.log("Two mathematical operators in a row are not allowed");
            } else {
                hasDecimal = false;
                box.value += x;
            } 
    }
    
    
    if(x === 'ac'){
        hasDecimal = false;
        box.value = '';
    }  
}

function answer(){
    //check if last char is an operator, if it is, truncate it
    if (allowedNums.indexOf(box.value.charAt(box.value.length - 1)) === -1){
           console.log("can't end with a numerical operator or a decimal so we'll trim it");
            box.value = box.value.substring(0, box.value.length - 1);    
            } 
    
    x = box.value;
    x = eval(x); //built in javascript function that evaluates string as a number
    box.value = x;
    hasDecimal = false;
    
    //find out if x contains a decimal
    if (box.value.includes(".") == true){
            console.log(x + " , which is the answer, contains a decimal");
            //if the last item in the array has a decimal, set the flag to true
            hasDecimal = true; 
        }
    
    //probably add some rounding
    }

function backspace(){
    var num = box.value;
    var len = num.length-1;
    //untoggle the decimal flag if what your're deleting is a decimal
    if (num.charAt(len) == "."){
        console.log("deleteing a decimal");
        hasDecimal = false;
        }
    
    var newNum = num.substring(0, len);
    
    //if you delete an operator, check if the next chunk has a decimal and if yes reset the flag to true
    if (allowedOperators.indexOf(num.charAt(len)) != -1){ 
        console.log("deleting an operator");
        
        //set flag to false
        hasDecimal = false;
        
        //parse the remaining string
        var regex = /[\+*/-]/; //regex for operators
        console.log("newNum is " + newNum)
        var parsedArr = newNum.split(regex);
        console.log("the last item is " + parsedArr[parsedArr.length -1]);
        
        //evaluate the last item in the array for a decimal
        if (parsedArr[parsedArr.length -1].indexOf(".") !== -1){
            console.log(parsedArr[parsedArr.length -1] + " contains a decimal");
            //if the last item in the array has a decimal, set the flag to true
            hasDecimal = true; 
        }
    }
    box.value = newNum;
}
