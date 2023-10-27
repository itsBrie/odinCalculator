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
let operation;
let arrayNumber=[];
let i=0;
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
numberOne=arrayNumber[0];
numberTwo=arrayNumber[1];
    operator=operation;
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
    arrayNumber=[];
    i=0;
    screen.innerHTML="";
    outcome="";
    operation="";
}

//Event Listeners buttons
    one.addEventListener('click',()=> {
        screen.innerHTML = "1";
       if (i===0){
           arrayNumber[i]=1;
           ++i;
       }
       if (i===1){
           arrayNumber[i]=1;
       }
    });


    two.addEventListener('click', function () {
        screen.innerHTML = "2";
        if (i===0){
            arrayNumber[i]=2;
            ++i;
        }
        if (i===1){
            arrayNumber[i]=2;
        }
    });
    three.addEventListener('click', function () {
        screen.innerHTML = "3";
        if (i===0){
            arrayNumber[i]=3;
            ++i;
        }
        if (i===1){
            arrayNumber[i]=3;
        }
    });
    four.addEventListener('click', function () {
        screen.innerHTML = "4";
        if (i===0){
            arrayNumber[i]=4;
            ++i;
        }
        if (i===1){
            arrayNumber[i]=4;
        }
    });
    five.addEventListener('click', function () {
        screen.innerHTML = "5";
        if (i===0){
            arrayNumber[i]=5;
            ++i;
        }
        if (i===1){
            arrayNumber[i]=5;
        }
    });
    six.addEventListener('click', function () {
        screen.innerHTML = "6";
        if (i===0){
            arrayNumber[i]=6;
            ++i;
        }
        if (i===1){
            arrayNumber[i]=6;
        }
    });
    seven.addEventListener('click', function () {
        screen.innerHTML = "7";
        if (i===0){
            arrayNumber[i]=7;
            ++i;
        }
        if (i===1){
            arrayNumber[i]=7;
        }
    });
    eight.addEventListener('click', function () {
        screen.innerHTML = "8";
        if (i===0){
            arrayNumber[i]=8;
            ++i;
        }
        if (i===1){
            arrayNumber[i]=8;
        }
    });
    nine.addEventListener('click', function () {
        screen.innerHTML = "9";
        if (i===0){
            arrayNumber[i]=9;
            ++i;
        }
        if (i===1){
            arrayNumber[i]=9;
        }
    });

    //Event Listeners Operation
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