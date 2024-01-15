const mClickNumb = (numb) => {
    (document.querySelector("input").value == 0)?
    (document.querySelector("input").value= numb)
    :(document.querySelector("input").value += numb)
} 
const mClickOpra = (opra) => {
    console.log(opra);
    
} 
const Clear = () => document.querySelector("input").value = 0