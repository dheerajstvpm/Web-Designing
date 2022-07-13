function buttonClick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function buttonClear(){
    document.getElementById("screen").value="";
}
function back(){
    document.getElementById("screen").value=document.getElementById("screen").value.slice(0,-1);
}
function equalClick(){
    var text=document.getElementById("screen").value;
    var result=eval(text);
    document.getElementById("screen").value=result;
}