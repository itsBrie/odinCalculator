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
let outcome=0;
let operation;
let arrayNumber=[];
let click=0;
let operandClick=0;
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




function operate(operator,numberOne,numberTwo) {
        numberOne = arrayNumber[0];
        numberTwo = arrayNumber[1];
        operator = operation;
        if (operator===plus) {
            outcome+=addNumbers(numberOne, numberTwo);
            operandClick=0;
        }
        if (operator===subtract) {
            outcome +=subtractNumbers(numberOne, numberTwo);
            operandClick=0;
        }
        if (operator===divide) {
            outcome += divideNumbers(numberOne, numberTwo);
            operandClick=0;
        }
        if (operator===multiply) {
            outcome +=multiplyNumbers(numberOne, numberTwo);
            operandClick=0;
        }

        // return outcome;
        screen.innerHTML = outcome;


}
function clearCalculator(){
    arrayNumber=[];
    click=0;
    screen.innerHTML="";
    outcome="";
    operation="";
}

//Event Listeners buttons
    one.addEventListener('click',()=> {
        screen.innerHTML = "1";
        if (click===0){
            arrayNumber[click]=1;
            ++click;
        }
        if (click===1){
            arrayNumber[click]=1;
        }
    });


    two.addEventListener('click', function () {
        screen.innerHTML = "2";
        if (click===0){
            arrayNumber[click]=2;
            ++click;
        }
        if (click===1){
            arrayNumber[click]=2;
        }
    });
    three.addEventListener('click', function () {
        screen.innerHTML = "3";
        arrayNumber[click]=3;
        ++click;
    });
    four.addEventListener('click', function () {
        screen.innerHTML = "4";
        arrayNumber[click]=4;
        ++click;
    });
    five.addEventListener('click', function () {
        screen.innerHTML = "5";
        arrayNumber[click]=5;
        ++click;
    });
    six.addEventListener('click', function () {
        screen.innerHTML = "6";
        arrayNumber[click]=6;
        ++click;
    });
    seven.addEventListener('click', function () {
        screen.innerHTML = "7";
        arrayNumber[click]=7;
        ++click;
    });
    eight.addEventListener('click', function () {
        screen.innerHTML = "8";
        arrayNumber[click]=8;
        ++click;
    });
    nine.addEventListener('click', function () {
        screen.innerHTML = "9";
        arrayNumber[click]=9;
        ++click;
    });

    //Event Listeners Operation
plus.addEventListener('click',function () {
    if (operandClick===0) {
        ++operandClick; //which will make it one
    }else{
        operation=plus;
        operate();
    }
    });
divide.addEventListener('click',function () {
    operation=divide;
    ++operandClick;

});
multiply.addEventListener('click',function () {
    operation=multiply;
    ++operandClick;

});
subtract.addEventListener('click',function () {
    operation=subtract;
    ++operandClick;

});


clear.addEventListener('click',clearCalculator);
equal.addEventListener('click',operate);