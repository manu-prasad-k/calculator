function display(num){
    output.value +=num; 
}



function clearall(){
    output.value=''
}

function evaluateExp(){
    output.value=eval(output.value)
}



function removeLast(){
    currentExp=output.value
    output.value=currentExp.slice(0,-1)
}