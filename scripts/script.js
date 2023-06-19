let num = '';
let mainDisplay = document.getElementById('main-display');
let secondDisplay = document.getElementById('second-display');

// Numbers
function onClickNum(value){
    num += value;
    secondDisplay.innerHTML = (num === undefined) ? '0':num;
    console.log(num);
}

// Operators 
function onClickOpe(value){
    if(value === 'del'){
        num = num.substring(0, num.length-1);
    }
    secondDisplay.innerHTML = num;
    console.log(num);
}