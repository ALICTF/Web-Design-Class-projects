// let x = Number(prompt("adad ro vared konid : " , "example : 12"))
// let y = Number(prompt("adad ro vared konid : " , "example : 12"))
// c = x+y
// console.log(c);
// document.write(`<h1> majmo adad vared shode shoma barabar as ba ${c} </h1>`)


// &&
// result = x==10 && y==20
// console.log(typeof(result));
// console.log(result);


// ||
// result = x==10 || y==20
// console.log(typeof(result));
// console.log(result);


//nul empty
// let g = null
// console.log(g);
// console.log(typeof(g));


// infinity
// let div = x/y
// console.log(isfinite (div))
// console.log(typeof(div));


// let check = confirm("do you want ...?")
// console.log(check);


// debugger
// age = Number(prompt("senet ro bego "))
// if(age>=18){
//     console.log("you are adult");
// }
// else{
//     console.log("you are kid");
// }
// console.log('dobare say kon');



// let username = prompt("meghdare user")
// let password = prompt("meghdare pass")
// if(username=="admin" && password=="123456"){
//     alert("login successfull");
// }
// else{
//     alert("wrong info");
// }

// let username = prompt("meghdare user")
// let password = prompt("meghdare pass")
// if(username=="admin"){
//     if(password=="123456"){
//     alert("login successfull");
// }
// }
// else{
//     alert("wrong info");
// }


// greater of 3 numbers with if 
// x = Number(prompt("adad aval :"))
// y = Number(prompt("adad dovom :"))
// z = Number(prompt("adad sevom :"))
// if(x>y && x>z){
//     document.write("greater is "+x)
// }
// else if (y>x && y>z){
//     document.write("greater is "+y)
// }
// else {
//     document.write("greater is "+z)
// }


// mosalas
// x = Number(prompt("adad aval :"))
// y = Number(prompt("adad dovom :"))
// z = Number(prompt("adad sevom :"))
// if (x*x == y*y + z*z || y*y == x*x + z*z || z*z == x*x + y*y ){
//     alert("mosalas qaemo al zavioye hast");
// }
// else{
//     alert("mosalas qaemo az zavioye nist");
// }


// x, y opperand +, -, /,*
// x = Number(prompt("enter the first number :"))
// y = Number(prompt("enter the secound number :"))
// opper = prompt("enter your oprator :(+ or / or - or * )")

// if (opper == "+") {
//     alert(x + y)
// } else if (opper == "-") {
//     alert(x - y)
// } else if (opper == "*") {
//     alert(x * y)
// } else if (opper == "/") {
//     alert(x / y)
// } else {
//     alert("please enter correct value")
// }

//ternary oprator
// let x = Number(prompt("adad ro vared konid : " , "example : 12"))
// let result = x>18 === true ? alert("go to uni ...") : alert("go to home ...") 
// console.log(result);


//for loop
// let x = Number(prompt("adad ro vared konid : " ))
// for(let a = 1 ;a<=x;a+=2 ){
//     alert(`${a}hiiiiiii`)
// }

// let x = Number(prompt("adad ro vared konid : " ))
// for(let a = 1 ;a<=x;a+=2 ){
//     if (a%2==0){
//         alert(`${a} adad zoje`)
//     }else{
//         alert(`${a} adad farde`)
//     }
// }

// let x = Number(prompt("adad ro vared konid : " ))
// for(let a=1;a<=x;a++ ){
//     if (a%100==0){
//         document.write(`<div style='width:100px; height=100px;background-color:pink; display:inline-block; margin:5px 5px ; text-align:center;'><h1>${a}</h1></div>`)
//     }else{
//         document.write(`<div style='width:100px; height=100px;background-color:gray; display:inline-block; margin:5px 5px ; text-align:center;'><h1>${a}</h1></div>`)
//     }
// }

// let x = Number(prompt("adad ro vared konid : " ))
// let a = 1
// for(;a<=x;){
//     if (a%2==0){
//         document.write(`<div style='width:100px; height=100px;background-color:pink; display:inline-block; margin:5px 5px ; text-align:center;'><h1>${a}</h1></div>`)
//     }else{
//         document.write(`<div style='width:100px; height=100px;background-color:gray; display:inline-block; margin:5px 5px ; text-align:center;'><h1>${a}</h1></div>`)
//     }
//     a++
// }

// for(;;)
// for(;true;)


// While
let x = Number(prompt("adad ro vared konid : " ))
let a = 1
while (a<=x){
    if (a%2==0){
        document.write(`<div style='width:100px; height=100px;background-color:pink; display:inline-block; margin:5px 5px ; text-align:center;'><h1>${a}</h1></div>`)
    }else{
        document.write(`<div style='width:100px; height=100px;background-color:gray; display:inline-block; margin:5px 5px ; text-align:center;'><h1>${a}</h1></div>`)
    }
    a++
}