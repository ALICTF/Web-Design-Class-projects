var firstNumber;
var secondNumber;
var flagNumb = false
const mClickNumb = (numb) => {
    debugger
    if(document.querySelector("input").value == "0" &&  flagNumb == false){
        document.querySelector("input").value = numb;
        flagNumb = true;
    } 
    else {
        document.querySelector("input").value += numb;
    }
}
const Clear = () => {document.querySelector("input").value = 0
};
mClickOpra = (opra) => {
    debugger
    if (opra == '+' ){
        firstNumber = Number(document.querySelector('input').value);
        document.querySelector("input").value = 0
        flagNumb = false 
    }       
    if(opra== '=' ){          
            var secondNumber = Number(document.querySelector('input').value)
            document.querySelector("input").value = firstNumber + secondNumber}
    
    }
















document.querySelector("body").addEventListener("keyup", (e) => {
console.log(e.key);
if (e.key >= "0" && e.key <= "9") {
    mClickNumb(Number(e.key));
} else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/" || e.key == "=")  {
    mClickOpra(e.key);
} else if (e.key == "c") {
    Clear();
}
})


























// if (opra == '-' || opra == '='){
//     var firstNumber = Number(document.querySelector('input').value);
//     document.querySelector("input").value = 0
//     mClickOpra =(opra)=>{
//         if(opra== '=' )
//         var secondNumber = Number(document.querySelector('input').value);
//         document.querySelector("input").value = firstNumber - secondNumber
// }
// }
// if (opra == '*' || opra == '='){
//     var firstNumber = Number(document.querySelector('input').value);
//     document.querySelector("input").value = 0
//     mClickOpra =(opra)=>{
//             if(opra== '=' )
//             var secondNumber = Number(document.querySelector('input').value);
//             document.querySelector("input").value = firstNumber * secondNumber
//         }
//         }
// if (opra == '/' || opra == '='){
//             var firstNumber = Number(document.querySelector('input').value);
//             document.querySelector("input").value = 0
//             mClickOpra =(opra)=>{
//                     if(opra== '=' )
//                     var secondNumber = Number(document.querySelector('input').value);
//                     document.querySelector("input").value = firstNumber / secondNumber
//                 }
//                 }