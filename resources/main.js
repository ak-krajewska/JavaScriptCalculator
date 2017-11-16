var box = document.getElementById('display');

function addToScreen(x){
    box.value += x;
    if(x === 'ac'){
        box.value = '';
    }  
}

function answer(){
    x = box.value;
    x = eval(x); //built in javascript function that evaluates string as a number it's neat as heck
    box.value = x;
    }

function backspace(){
    var num = box.value;
    var len = num.length-1;
    var newNum = num.substring(0, len);
    box.value = newNum;
}