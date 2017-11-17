var box = document.getElementById('display');

var allowedNums = ["0","1","2","3","4","5","6","7","8","9"];
var allowedInts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var allowedOperators = ["+", "-", "*", "/"];


function addToScreen(x){
    //add validation
    //allow math operator only after an integer
    //allow only one decimal point per chunk of integers
    
    
    
    //you want to enter a number
    if (allowedNums.indexOf(x) != -1){
                console.log("It's a number, so you can add it");
                //no leading zero, no zero directly after an operator
                if (((x == 0) && (box.value.length == 0)) || (x == 0) && (allowedOperators.indexOf(box.value.charAt(box.value.length - 1)) != -1) ){
                    alert("no leading zero");
                } else 
                    box.value += x;
            }
    
    //you want to enter a decimal point
    if (x == "."){
        box.value +=x;
    }
    
    
    //if want to enter a math operator
    if(allowedOperators.indexOf(x) != -1) {
        //check if the last char of what's currently in the box is a number
        console.log(x + " is an operator");
        if (allowedNums.indexOf(box.value.charAt(box.value.length - 1)) === -1){
           console.log("Two mathematical operators in a row are not allowed");
            alert("A mathematical operator can only follow a number");
            } else {
                box.value += x;
            } 
    }
    
    /*
    if(allowedNums.indexOf(x) === -1) {
        console.log(x + " is not a number");
        console.log("only a number is allowed next");
    }
    */
    
    
    
    
    if(x === 'ac'){
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
    x = eval(x); //built in javascript function that evaluates string as a number it's neat as heck
    box.value = x;
    //probably add some rounding
    }

function backspace(){
    var num = box.value;
    var len = num.length-1;
    var newNum = num.substring(0, len);
    box.value = newNum;
}