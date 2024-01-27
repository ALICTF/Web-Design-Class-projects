var Email =()=>{
    let email=document.querySelector("#inEmail").value;
    var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    result = regex.test(email)
    if (result){
        document.querySelector("#inEmailD").style.backgroundColor = "#0f0"
    }else{ document.querySelector("#inEmailD").style.backgroundColor = "red"}
}
var User =()=>{
    let User=document.querySelector("#inUser").value;
    var regex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/
    result = regex.test(User)
    if (result){
        document.querySelector("#inUserD").style.backgroundColor = "#0f0"
    }else{document.querySelector("#inUserD").style.backgroundColor = "red"}
}
var Pass =()=>{
    let Pass=document.querySelector("#inPass").value;
    let CPass=document.querySelector("#inCPass").value;
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
    result1 = regex.test(Pass)
    result2 = regex.test(CPass)
    if (result1){
        document.querySelector("#inPassD").style.backgroundColor = "#0f0"
    }else{document.querySelector("#inPassD").style.backgroundColor = "red"}

    if(Pass === CPass){
        document.querySelector("#inPassD").style.backgroundColor = "#0f0"
        document.querySelector("#inCPassD").style.backgroundColor = "#0f0"
    }else{
        document.querySelector("#inCPassD").style.backgroundColor = "red"
    }
}







// var CPass =()=>{
//     let CPass=document.querySelector("#inCPass").value;
//     var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
//     result = regex.test(CPass)
//     if (result){
//         document.querySelector("#inCPassD").style.backgroundColor = "#0f0"
//     }else{document.querySelector("#inCPassD").style.backgroundColor = "red"}
// }








