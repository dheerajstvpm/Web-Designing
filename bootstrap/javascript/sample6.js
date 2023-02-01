document.getElementById("clickHere").addEventListener("click",clicked)
function clicked(){
    setTimeout(myFunction,2000)
    function myFunction(){
        
        document.getElementById("out").innerHTML="Hello"
    }
}
