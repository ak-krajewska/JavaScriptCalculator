/* notes for later use
///How to Parse a String by Operator
var regex = /[\+/*-]/;
var str = "1+2-3*4/5";
console.log(str.split(regex));
///things that need work
honestly this whole thing should probably be done with arrays much as I tried to avoid it by carrying out mathematical operations in the display box. Very sadface.
*/

var box = document.getElementById('display');

var allowedNums = ["0","1","2","3","4","5","6","7","8","9"];
var allowedInts = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var allowedOperators = ["+", "-", "*", "/"];
var hasDecimal = false; //toggle for tracking if a chunk has a decimal


//I'd like to allow one leading zero but only if it is followed by a period

function addToScreen(x){
    //add validation
    //allow math operator only after an integer
       
    //you want to enter a number
    if (allowedNums.indexOf(x) != -1){
                console.log("It's a number, so you can add it");
                //no leading zero, no zero directly after an operator
                if (((x == 0) && (box.value.length == 0)) || (x == 0) && (allowedOperators.indexOf(box.value.charAt(box.value.length - 1)) != -1) ){
                    alert("no leading zero");
                } else 
                    box.value += x;
            }
    
    
    //paul's suggestion: track if you've added a decimal, and don't allow a second decimal if the flag says that a decimal has been added. A math operator clears the flag.
    //ok but what if someone goes AC? 
    //how about we clear the flag after the first number after the math operator
    
    // //allow only one decimal point per chunk of integers
    //you want to enter a decimal point
    if (x == "."){
        if (hasDecimal == true){
        console.log("already has a decimal");
        alert("stop dots!");
        } else if (hasDecimal == false){
            hasDecimal = true;
            console.log("a decimal point has been added");
            box.value +=x;
        }
    }
    
    //if want to enter a math operator
    if(allowedOperators.indexOf(x) != -1) {
        //check if the last char of what's currently in the box is a number
        console.log(x + " is an operator");
        if (allowedNums.indexOf(box.value.charAt(box.value.length - 1)) === -1){
           console.log("Two mathematical operators in a row are not allowed");
            alert("A mathematical operator can only follow a number");
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
    x = eval(x); //built in javascript function that evaluates string as a number it's neat as heck
    box.value = x;
    hasDecimal = false;
    //probably add some rounding
    }

function backspace(){
    var num = box.value;
    var len = num.length-1;
    if (num.charAt(len) == "."){
        console.log("deleteing a decimal");
        hasDecimal = false;
        }
    //if you delete an operator, check if the next "chunk" has a decimal and reset the flag to true
    if (allowedOperators.indexOf(num.charAt(len)) != -1){ 
        console.log("deleting an operator");
        //look if I just prevented them from adding the duplicative decimal in the first place, I wouldn't need to do this check. or wait. no, damn it. I still have to check as I type
    }
    
    var newNum = num.substring(0, len);
    //untoggle the decimal flag if what your're deleting is a decimal
    
    box.value = newNum;
}
