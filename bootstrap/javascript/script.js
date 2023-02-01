function btnclick(val){
    document.getElementById('screen').value+=val;
}
function clr(){
    document.getElementById("screen").value=""
}
function equalclick(){
    text=document.getElementById("screen").value
    result=eval(text)
    document.getElementById("screen").value=result
}