function buttonClick(val){
    if (flag==0){
        document.getElementById("screen").value=document.getElementById("screen").value+val;
    }
    else{
        document.getElementById("screen").value=val;
        flag=0;
    }
    
}
function buttonClear(){
    document.getElementById("screen").value="";
}
function back(){
    document.getElementById("screen").value=document.getElementById("screen").value.slice(0,-1);
}

var text;
var temp="";
var result;
var flag;
function equalClick(val){
    text=temp+document.getElementById("screen").value;
    console.log(text)
    result=eval(text);
    console.log(result)
    document.getElementById("screen").value=result;
    flag=1;
    temp="";
}
function operationClick(val){
    temp=temp+document.getElementById("screen").value+val;
    console.log(temp)
    document.getElementById("screen").value="";
    flag=0;
}
    

