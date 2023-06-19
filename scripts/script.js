let num = '';


// Numbers
function onClickNum(value){
    num += value;
    console.log(num);
}

// Operators 
function onClickOpe(value){
    if(value === 'del'){
        num = num.substring(0, num.length-1);
    }
    console.log(num);
}