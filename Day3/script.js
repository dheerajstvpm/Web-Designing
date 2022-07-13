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
    
    if(flag==0){
        var previousValue=document.getElementById("screen").value;
    }
    else if(flag==1){
        var previousValue=previousValue+document.getElementById("screen").value;
    }
    else if(flag==2){
        var previousValue=previousValue-document.getElementById("screen").value;
    }
    else if(flag==3){
        var previousValue=previousValue*document.getElementById("screen").value;
    }
    else {
        var previousValue=previousValue/document.getElementById("screen").value;
    }
    document.getElementById("screen").value=previousValue;
}
function operationClick(val){
    if(document.getElementById("screen").value=='+'){
        var flag=1;
    }
    if(document.getElementById("screen").value=='-'){
        var flag=2;
    }
    if(document.getElementById("screen").value=='*'){
        var flag=3;
    }
    else{
        var flag=4;
    }

    if(flag==0){
        var previousValue=document.getElementById("screen").value;
    }
    else if(flag==1){
        var previousValue=previousValue+document.getElementById("screen").value;
    }
    else if(flag==2){
        var previousValue=previousValue-document.getElementById("screen").value;
    }
    else if(flag==3){
        var previousValue=previousValue*document.getElementById("screen").value;
    }
    else{
        var previousValue=previousValue/document.getElementById("screen").value;
    }

    document.getElementById("screen").value="";
}