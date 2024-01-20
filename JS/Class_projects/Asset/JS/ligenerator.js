var flag = false
document.querySelector('h3').style.display = "none"
document.querySelector('button').style.display = "none"
function clickBtn() {
    let userUl = Number(prompt("enter the number of li .... "))
    if (flag == true) {
        document.querySelector("ul").remove()
        document.getElementById("div").appendChild(document.createElement("ul"))
        flag = false
    }
    for (let i = 1; i <= userUl; i++) {
        document.querySelector("ul").appendChild(document.createElement("li")).innerHTML = `it is li number : ${i}`
    }
    document.querySelector('h3').style.display = ""
    document.querySelector('button').style.display = ""
    flag = true
}
function searchInput(ev){
    var inputValue = ev.currentTarget.value
    var listItem = document.getElementsByTagName('li')
    console.log(listItem.length);
    for (var i = 0; i < listItem.length; i++)
        if (!listItem[i].textContent.includes(inputValue)) {
            listItem[i].style.display = "none"
            // alert(`please search in range 0 to ${listItem.length}`)
        } else {
            listItem[i].style.display = ""
        }

}







