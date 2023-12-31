const selected=document.getElementById('selected');

function applyToSelected(input){
    selected.value += input;
}
function sum(){
    try{
    selected.value=eval(selected.value);

    }
catch(error){
    selected.value="complete!"
}
}
function clearSelected(){
    selected.value="";
}
