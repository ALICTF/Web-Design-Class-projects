var flag = false
function clickBtn(){
    let userUl = Number(prompt("enter the number of li .... "))
    // if (flag == true ){
    //     document.querySelector("ul").remove()
    //     document.getElementById("div").appendChild(document.createElement("ul")) 
    //     alert("ul sakhte shod")
    //     flag=false
    //     }
    for(let i = 1 ;i<=userUl;i++){
        document.querySelector("ul").appendChild(document.createElement("li")).innerHTML =`it is li number : ${i}`
        
    }
    // flag=true
}






