let num = '';
let operator = '';
let mainDisplay = document.getElementById('main-display');
let secondDisplay = document.getElementById('second-display');

// Numbers
function onClickNum(value){
    if(!(num.length == 0 && value === '0')) {
        num += (num.split('.').length == 2 && value === '.') 
        ? '':value;
        secondDisplay.innerHTML = num;
        //console.log(num);
    } 
}

// Operators 
function onClickOpe(value){

    if(value === 'del'){
        if(!isNaN(num.charAt(num.length-1))) {
            operator = '';  
        }
        num = num.substring(0, num.length-1);

    } else if(value === 'c') {
        num = '';
        operator = '';
        mainDisplay.innerHTML = (num === '') ? '0':num;
        
    } else if (value === '=') {
        if(operator === '%') {
            let temp = num.split('%');
            mainDisplay.innerHTML = (Number(temp[0]) / Number(temp[1]));

        } else if(operator === 'x') {
            let temp = num.split('x');
            mainDisplay.innerHTML = (Number(temp[0]) * Number(temp[1]));

        } else if(operator === '+') {
            let temp = num.split('+');
            mainDisplay.innerHTML = (Number(temp[0]) + Number(temp[1]));

        } else if(operator === '-') {
            let temp = num.split('-');
            mainDisplay.innerHTML = (Number(temp[0]) - Number(temp[1]));
        } 
        

    } else {
        if(!isNaN(num.charAt(num.length-1)) && value === '-') {
            if(num.length !== 0 && !isNaN(num)) {
                num += value;
                operator = '-';
            
            } else if(operator.length === 0) {
                num += value;
            }
        
        } else if(operator.length === 0){
            num += value;
            operator = value;

        } else if(operator.length !== 0 && isNaN(num.charAt(num.length-1))) {
            num = num.substring(0, num.length-1);
            num += value;
            operator = value;
        }
    }

    secondDisplay.innerHTML = (num === '') ? '0':num;
    //console.log(num);
}