const mClickNumb = (numb) => {
    document.querySelector("input").value == 0 ?
    document.querySelector("input").value = numb:
    document.querySelector("input").value += numb;
}
const Clear = () => {document.querySelector("input").value = 0
};
mClickOpra = (opra) => {
    if (opra == '+' || opra == '='){
        var firstNumber = Number(document.querySelector('input').value);
        document.querySelector("input").value = 0
        console.log(firstNumber);
        mClickOpra =(opra)=>{
            if(opra== '=' )
            var secondNumber = Number(document.querySelector('input').value)
            document.querySelector("input").value = firstNumber + secondNumber
        }
    }
    if (opra == '-' || opra == '='){
        var firstNumber = Number(document.querySelector('input').value);
        document.querySelector("input").value = 0
        mClickOpra =(opra)=>{
            if(opra== '=' )
            var secondNumber = Number(document.querySelector('input').value);
            document.querySelector("input").value = firstNumber - secondNumber
    }
    }
    if (opra == '*' || opra == '='){
        var firstNumber = Number(document.querySelector('input').value);
        document.querySelector("input").value = 0
        mClickOpra =(opra)=>{
                if(opra== '=' )
                var secondNumber = Number(document.querySelector('input').value);
                document.querySelector("input").value = firstNumber * secondNumber
            }
            }
            if (opra == '/' || opra == '='){
                var firstNumber = Number(document.querySelector('input').value);
                document.querySelector("input").value = 0
                mClickOpra =(opra)=>{
                        if(opra== '=' )
                        var secondNumber = Number(document.querySelector('input').value);
                        document.querySelector("input").value = firstNumber / secondNumber
                    }
                    }
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
