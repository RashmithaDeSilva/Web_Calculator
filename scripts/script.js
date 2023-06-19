let num = '';
let operator = '';
let mainDisplay = document.getElementById('main-display');
let secondDisplay = document.getElementById('second-display');

// Numbers
function onClickNum(value){
    num += (num.split('.').length == 2 && value === '.') ? '':value;
    secondDisplay.innerHTML = num;
    //console.log(num);
}

// Operators 
function onClickOpe(value){
    if(value === 'del'){
        num = num.substring(0, num.length-1);

    } else if(value === 'c') {
        num = '';
        mainDisplay.innerHTML = (num === '') ? '0':num;
        
    } else if (value === '=') {
        

    } else {
        operator = value;
    }
    secondDisplay.innerHTML = (num === '') ? '0':num;
    //console.log(num);
}