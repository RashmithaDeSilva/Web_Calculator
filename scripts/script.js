let num = '';
let operator = [];
let mainDisplay = document.getElementById('main-display');
let secondDisplay = document.getElementById('second-display');

// Numbers
function onClickNum(value){
    if(!(num.length == 0 && value === '0')) {
        num += (num.split('.').length == 2 && value === '.') ? '':value;
        secondDisplay.innerHTML = num;
        //console.log(num);
    } 
}

// Operators 
function onClickOpe(value){

    if(value === 'del'){
        if(operator.length != 0 && num.endsWith(operator)) {
            operator.pop();
        }
        num = num.substring(0, num.length-1);

    } else if(value === 'c') {
        num = '';
        operator = [];
        mainDisplay.innerHTML = (num === '') ? '0':num;
        
    } else if (value === '=') {
        

    } else {
        num += value;
        operator.push(value);
    }

    secondDisplay.innerHTML = (num === '') ? '0':num;
    //console.log(num);
}