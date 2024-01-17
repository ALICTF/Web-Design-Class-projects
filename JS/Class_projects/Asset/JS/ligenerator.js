var ulTag = document.getElementById("ulTag")
function clickBtn(){

    let userUl = Number(prompt("enter the number of li .... "))
    for(let i = 1 ;i<=userUl;i++){
        ulTag.appendChild(document.createElement("li"))
        document.getElementsByTagName("li").innerText = i
    }
    
    }





