//--------Variables globales-----------
let num1 = "";
let num2 = "";
let operator = "";
let result="";
//-------------Funciones-----------------
const SelectedNumber = (value) =>{
    if (result !=0){
        Empty();
    }
    if (value === "π"){
        value = Math.PI.toFixed(4);
    }
    if (value === "."){
        if (!num1.includes(value)) {
            if (num1 === '') {
                num1 = '0.';
            } else {
                num1 += '.';
            }
        }
    } else {
        num1 += value;
    }
    showNum1(num1);
}
const OperatorSelector = (SelecterOperator) => {

    switch (SelecterOperator) {
        case 'X²':
            squared();
            break;
        case '²√x':
            squareRoot();
            break;
        case '+/-':
            changeSign();
            break;
        case '¹/x':
            oneSplit();
            break;
        default:
            if (num2 != '') {               
                operator = SelecterOperator;
                showNum2()
            } else if (num1 != '') {
                operator = SelecterOperator
                num2 = num1
                num1 = ''
                showNum1()
                showNum2()
            }
            break;
    }
}
const Calculate = () => {
    if (num1 != '' && num2 != '' && operator != '') {
        switch (operator) {
            case '+':
                add()
                break;
            case '-':
                substract()
                break;
            case '*':
                multiply()
                break;
            case '/':
                split()
                break;
            case '%':
                percent()
                break;
        }
    }
}
//--------------operaciones-----------------
const add = () => {
    result = Number(num2) + Number(num1)
    showResult();
}
const substract = () => {
    result = Number(num2) - Number(num1)
    showResult();
}
const multiply = () => {
    result = Number(num2) * Number(num1)
    showResult();
}
const split = () => {
    result = Number(num2) / Number(num1)
    showResult();
}
const squared = () => {
    result = Math.pow(Number(num1), 2)
    showResult();
}
const squareRoot = () => {
    result = Math.sqrt(Number(num1))
    showResult();
}
const percent = () => {
    result = (Number(num2) * (Number(num1) / 100))
    showResult();
}
const changeSign = () => {
    num1 = Number(num1) * -1
    num1 = num1.toString()
    showNum1();
}
const oneSplit = () => {
    result = (1/Number(num1));
    showResult();
}
//---------------borradores----------------
const DeleteLastNumber = () => {
    if (num1 != '') {
        num1 = num1.substring(0, num1.length - 1);
        showNum1()
    }
}
const DeleteNum1 = () => {
    num1 = '';
    showNum1();
}
const DeleteAll = () => {
    Empty();
    showNum1();
    showNum2();
}
const Empty = () => {
    num1 = ''
    num2 = ''
    operator = ''
    result = 0
}
//------------------mostrar-----------------
const showNum1 = () => {
    document.getElementById("outNum1").innerHTML = num1;
}
const showNum2 = () => {
    document.getElementById("outNum2").innerHTML = num2 + ' ' + operator;
}
const showResult = () => {
    document.getElementById("outNum1").innerHTML = result;
    document.getElementById("outNum2").innerHTML = '';
}