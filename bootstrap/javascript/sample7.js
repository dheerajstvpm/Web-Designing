// let p=new Promise((resolve,reject)=>{
//     let a=2+1
//     if(a==2){
//         resolve("Correct")
//     }
//     else{
//         reject("Incorrect")
//     }
// })
// let q=new Promise(function(){
//     let a=2+1
//     if(a==2){
//         console.log("Success")
//     }
//     else{
//         console.log("Failure")
//     }
// })
// p.then((value)=>{
//     console.log("This is in the then:",value)
// }).then((value)=>{
//     console.log("This is in the 2nd then:",value)
// }).catch((value)=>(
//     console.log("This is in catch :",value)
// )).finally(value=>(
//     console.log("Goodbye",value)
// ))

// // var a=[1,2,3,4,5,6,7,7,7]
// // let output=a.filter((x)=>(x%2==0)).map((y)=>"*")
// // console.log(output)

// let a=[1,2,3,4]
// a.forEach(display)
// function display(item,i,b){
//     b[i]=item*2;
// }
// console.log(a)

myArray = [1, 2, 3, 4, 5]

function callback(myArray) {
    let sum = 0;
    for (i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i]
    }
    return (sum % 2 == 0)
}
let myFilter = (myArray, callback) => {
    let response = callback(myArray)
    console.log(response)
    let sum = 0;
    for (i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i]
    }
    console.log(sum)
};
myFilter(myArray,callback)