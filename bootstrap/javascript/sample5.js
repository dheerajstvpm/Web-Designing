function outerFunction(outerVariable){
    return function innerFunction(innerVariable){
        console.log("outer : "+outerVariable)
        console.log("inner : "+innerVariable)
    }
    
}
const newFunction=outerFunction("outer")
newFunction("inner")
outerFunction("out")("inn")
console.log(outerFunction)
