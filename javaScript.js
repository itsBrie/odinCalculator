//The numbered buttons
const one=document.querySelector(".one");
const two=document.querySelector(".two");
const three=document.querySelector(".three");
const four=document.querySelector(".four");
const five=document.querySelector(".five");
const six=document.querySelector(".six");
const seven=document.querySelector(".seven");
const eight=document.querySelector(".eight");
const nine=document.querySelector(".nine");
//The operators
const divide=document.querySelector(".divide");
const multiply=document.querySelector(".multiply");
const subtract=document.querySelector(".subtract");
const plus=document.querySelector(".plus");
const equal=document.querySelector(".equals");
const clear=document.querySelector(".clear");
//The screen
const screen=document.querySelector(".screen");
let outcome;
let numberArray=[];
console.log(numberArray);
let operation;

function addNumbers(numOne,numTwo){
return numOne+numTwo;

}
function subtractNumbers(numOne,numTwo){
    return numOne-numTwo;
}

function divideNumbers(numOne,numTwo){
    return numOne/numTwo;
}

function multiplyNumbers(numOne,numTwo){
    return numOne*numTwo;
}




function operate(operator,numberOne,numberTwo){
    operator=operation;
    numberOne=numberArray[0];
    numberTwo=numberArray[1];
    console.log(numberArray);
    if (operator===plus){
        outcome=addNumbers(numberOne,numberTwo);
    }
    if (operator===subtract){
        outcome=subtractNumbers(numberOne,numberTwo);
    }
    if (operator===divide){
        outcome=divideNumbers(numberOne,numberTwo);
    }
    if (operator===multiply){
        outcome=multiplyNumbers(numberOne,numberTwo);
    }
    // return outcome;
    screen.innerHTML=outcome;
}
function clearCalculator(){
    numberArray=[];
    screen.innerHTML="";
    outcome="";
    operation="";
    console.log(numberArray);
}

for (let i=0;i<2;i++){
    one.addEventListener('click', function () {
        screen.innerHTML = "1";
        numberArray[i] = 1;
        i++;
    });
    two.addEventListener('click', function () {
        screen.innerHTML = "2";
        numberArray[i] = 2;
        i++;
    });
    three.addEventListener('click', function () {
        screen.innerHTML = "3";
        numberArray[i] = 3;
        i++;
    });
    four.addEventListener('click', function () {
        screen.innerHTML = "4";
        numberArray[i] = 4;
        i++;
    });
    five.addEventListener('click', function () {
        screen.innerHTML = "5";
        numberArray[i] = 5;
        i++;
    });
    six.addEventListener('click', function () {
        screen.innerHTML = "6";
        numberArray[i] = 6;
        i++;
    });
    seven.addEventListener('click', function () {
        screen.innerHTML = "7";
        numberArray[i] = 7;
        i++;
    });
    eight.addEventListener('click', function () {
        screen.innerHTML = "8";
        numberArray[i] = 8;
        i++;
    });
    nine.addEventListener('click', function () {
        screen.innerHTML = "9";
        numberArray[i] = 9;
        i++;
    });
}
plus.addEventListener('click',function () {
    operation=plus;

});
divide.addEventListener('click',function () {
    operation=divide;

});
multiply.addEventListener('click',function () {
    operation=multiply;

});
subtract.addEventListener('click',function () {
    operation=subtract;

});


clear.addEventListener('click',clearCalculator);
equal.addEventListener('click',operate);