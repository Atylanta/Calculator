const PERCENT = document.getElementById("btnPercent");
const ROOT = document.getElementById("btnRoot");
const POWER = document.getElementById("btnPower");
const FRACTION = document.getElementById("btnFraction");

const C = document.getElementById("btnC");
const CE = document.getElementById("btnCE");
const BACKSPASE = document.getElementById("btnBackspace");
const DIVIDE = document.getElementById("btnDivide");

const SEVEN = document.getElementById("btnSeven");
const EIGHT = document.getElementById("btnEight");
const NINE = document.getElementById("btnNine");
const MULTIPLY = document.getElementById("btnMultiply");

const FOUR = document.getElementById("btnFour");
const FIVE = document.getElementById("btnFive");
const SIX = document.getElementById("btnSix");
const MINUS = document.getElementById("btnMinus");

const ONE = document.getElementById("btnOne");
const TWO = document.getElementById("btnTwo");
const THREE = document.getElementById("btnThree");
const PLUS = document.getElementById("btnPlus");

const PLUSMINUS = document.getElementById("btnPlusMinus");
const ZERO = document.getElementById("btnZero");
const DOT = document.getElementById("btnDot");
const EQUALL = document.getElementById("btnEquall");


var display = document.getElementById("displayCalc");
var displayMemory = document.getElementById("displaySecond");
var arrayMemoryNumbers = [];
var arrayMemoryOperations = [];
var resultEquall = 0;
var changes = false;



function clickPercent(){
    //Описываем условия написания знака \ describing the conditions of using the symbol
    if (arrayMemoryNumbers.length < 1 && !changes) { //если экран пуст \ if the display is clear
        display.value = 0;
    } else if (changes) { // Если мы ввели новое число \ if we write a new number
        if (changes && arrayMemoryNumbers.length < 1) { //если на экране только 1 число \ if we write only 1 number
            display.value = 0;
        } else { //если на экране больше 1 числа \ if there is more then 1 number
            display.value = arrayMemoryNumbers[arrayMemoryNumbers.length-1] / 100 * display.value;
        }
    } else if (!changes && display.value == resultEquall) { //Если на экране - результат функции равно \ if it's a result of Equall function on the display
        return display.value;
    } else { //Если предыдущее значение - знак или это посчитанный результат \ if the last value - it's an operation symbol
        return display.value;
    }
}
PERCENT.addEventListener('click', clickPercent);

function clickRoot(){
    //Описываем условия написания знака \ describing the conditions of using the symbol
    if (display.value === 0) { //Если экран полностью пуст \ if the display is clear
        display.value = 0;
    } else if (changes) { // Если мы ввели новое число \ if we write a new number
        display.value = Math.sqrt(display.value);
    } else if (!changes && display.value == resultEquall) { //Если мы хотим получить кв.кoрень результата \ if we need to have the square root of the number
        display.value = Math.sqrt(display.value);
    } else { //Если предыдущее значение - знак или это посчитанный результат \ if the last value - it's an operation symbol or a result of Equall function
        return display.value;
    }
}
ROOT.addEventListener('click', clickRoot);

function clickPower(){
    if (display.value === 0) { //Если экран полностью пуст \ if the display is clear
        display.value = 0;
    } else if (changes) { // Если мы ввели новое число \ if we write a new number
        display.value = Math.pow(display.value, 2);
    } else if (!changes && display.value == resultEquall) { //Если мы хотим получить результат в квадрате \ if we need to have the number in degree
        display.value = Math.pow(display.value, 2);
    } else { //Если предыдущее значение - знак или это посчитанный результат \ if the last value - it's an operation symbol or a result of Equall function
        return display.value;
    }
}
POWER.addEventListener('click', clickPower);

function clickFraction(){
    if (arrayMemoryNumbers.length < 1 && !changes){ //если экран пуст \ if the display is clear
        display.value = 0;
    } else if (changes) { // Если мы ввели новое число \ if we write a new number
        display.value = 1 / display.value;
    } else if (!changes && display.value == resultEquall) { //Если мы хотим получить дробь \ if we need to have fraction
        display.value = 1 / display.value;
    } else { //Если предыдущее значение - знак или это посчитанный результат \ if the last value - it's an operation symbol or a result of Equall function
        return display.value;
    }
}
FRACTION.addEventListener('click', clickFraction);


function clickC(){
    display.value = 0;
    displayMemory.value = " ";
    arrayMemoryNumbers = [];
    arrayMemoryOperations = [];
}
C.addEventListener('click', clickC);

function clickCE(){
    display.value = 0;
}
CE.addEventListener('click', clickCE);

function clickBackspase(){
    if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.substr(0, (display.value.length -1));
    }
}
BACKSPASE.addEventListener('click', clickBackspase);


function clickNumber(value){ // if we need to write a number
    return function() {
        if (display.value === '0') { //Если экран пуст \ if the display is clear
            display.value = value;
            changes = true;
        } else {
            if (changes) { //Если мы вводим число \ if we write a number
                display.value += value;
                changes = true;
            } else { //Если предыдущее значение - математический знак \ if previous value is an operation symbol
                display.value = value;
                changes = true;
            }
        }
    }
}
ZERO.addEventListener('click', clickNumber(ZERO.value));
ONE.addEventListener('click', clickNumber(ONE.value));
TWO.addEventListener('click', clickNumber(TWO.value));
THREE.addEventListener('click', clickNumber(THREE.value));
FOUR.addEventListener('click', clickNumber(FOUR.value));
FIVE.addEventListener('click', clickNumber(FIVE.value));
SIX.addEventListener('click', clickNumber(SIX.value));
SEVEN.addEventListener('click', clickNumber(SEVEN.value));
EIGHT.addEventListener('click', clickNumber(EIGHT.value));
NINE.addEventListener('click', clickNumber(NINE.value));

function clickSimpleOperation(value){ //if we need to write an operation symbol
    return function () {
        if (display.value === 0) { //Если экран полностью пуст \ if the display is clear
            display.value = 0;
        } else {
            if (changes) { // Если мы ввели новое число \ if we write a number
                arrayMemoryNumbers.push(display.value);
                displayMemory.value += display.value + value;
                arrayMemoryOperations.push(value);
                changes = false;
            } else if (!changes && display.value == resultEquall) { // Если мы посчитали результат и хотим произвести с ним некоторые операции // if we need to use trhe result of Equall function
                arrayMemoryNumbers.push(display.value);
                displayMemory.value = display.value + value;
                arrayMemoryOperations.push(value);
                changes = false;
            }
            else {
                let num = arrayMemoryOperations.length - 1;
                if (arrayMemoryOperations[num] === value && !changes) { //Если мы нажимаем знак повторно \ if we press the operation symbol repeatedly 
                    return display.value;
                } else { // Если мы не вводили цифры и хотим сменить знак \ if we want to change the operation symbol in memory
                    let string = displayMemory.value.substring(0, displayMemory.value.length - 1);
                    displayMemory.value = string + value;
                    arrayMemoryOperations[num] = value;
                }
            }
        }
    }
}
DIVIDE.addEventListener('click', clickSimpleOperation(DIVIDE.value));
MULTIPLY.addEventListener('click', clickSimpleOperation(MULTIPLY.value));
MINUS.addEventListener('click', clickSimpleOperation(MINUS.value));
PLUS.addEventListener('click', clickSimpleOperation(PLUS.value));


function clickPlusMinus(){ //Меняем плюс на минус и наоборот перед выражением \ changing the +/- symbols before the value
    if (display.value[0] == '-') {
        let displayNow = display.value.substring(1);
        return display.value = displayNow;
    }
    else {
        let displayNow = display.value.substring(0);
        var resultNumber = '-';
        return display.value = resultNumber + displayNow;
    }
}
PLUSMINUS.addEventListener('click', clickPlusMinus);

function clickDot(){ //Десятичная точка \ Decimal point
    let array = display.value.split('');
    let dotFinder = false;

    for (let i = 0; i < array.length; i++ ) {
        if (array[i] === '.') {
            dotFinder = true;
            break;
        }
    }
    if (!dotFinder) {
        display.value += '.';
    } else {
        return display.value;
    }
}
DOT.addEventListener('click', clickDot);


function clickEquall(){
    //Добавляем в массив последнее введенное значение \\ pushing in array the last writing number
    arrayMemoryNumbers.push(display.value);
    displayMemory.value += display.value;
    changes = false;

    //Выполняем действия умножения или деления \ performing the '*'|'/' operations
    for (let j = 0; j <= arrayMemoryOperations.length; j++) {
        for (let i = 0; i <= arrayMemoryOperations.length; i++) {
            if (arrayMemoryOperations[i] === '*' ||
                arrayMemoryOperations[i] === '/') {
                if (arrayMemoryOperations[i] === '*') {
                    let result = arrayMemoryNumbers[i]*arrayMemoryNumbers[i+1];
                    arrayMemoryNumbers.splice(i, 2, result);
                    arrayMemoryOperations.splice(i, 1);
                    break;
                } else {
                    let result = arrayMemoryNumbers[i]/arrayMemoryNumbers[i+1];
                    arrayMemoryNumbers.splice(i, 2, result);
                    arrayMemoryOperations.splice(i, 1);
                    break;
                }
            }
        }
    }

    //Выполняем действия сложения и вычитания \ performing the '+'|'-' operations
    for (let j = 0; j <= arrayMemoryOperations.length; j++) {
        for (let i = 0; i <= arrayMemoryOperations.length; i++) {
            if (arrayMemoryOperations[i] === '+' ||
                arrayMemoryOperations[i] === '-') {
                if (arrayMemoryOperations[i] === '+') {
                    let result = (+arrayMemoryNumbers[i])+(+arrayMemoryNumbers[i+1]);
                    arrayMemoryNumbers.splice(i, 2, result);
                    arrayMemoryOperations.splice(i, 1);
                    break;
                } else {
                    let result = (+arrayMemoryNumbers[i])-(+arrayMemoryNumbers[i+1]);
                    arrayMemoryNumbers.splice(i, 2, result);
                    arrayMemoryOperations.splice(i, 1);
                    break;
                }
            }
        }
    }

resultEquall = arrayMemoryNumbers[0];
    arrayMemoryNumbers = [];
    arrayMemoryOperations = [];
    changes = false;
display.value = resultEquall;
}
EQUALL.addEventListener('click', clickEquall);
