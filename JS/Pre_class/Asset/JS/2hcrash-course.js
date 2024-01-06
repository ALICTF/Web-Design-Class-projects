//  starting to learn "https://www.youtube.com/watch?v=oUjQ7eP38H8&t=6114s" crash course from youtube .


// variables and constance

// let number = 20
// let number = 30
// number = 30

//constance

// const number = 10
// number = 10


// = + - *

// let number1 = 10
// let number2 = 20
// let result = (number1 + number2)

// let number1 = 10
// let number2 = 20
// let result = (number1 - number2)

// let number1 = 10
// let number2 = 20
// let result = (number1 * number2)

// let number1 = 10
// let number2 = 20
// let result = (number1 / number2)



// data types :


// let age = 10
// let name = 'john'
// let validUser = true
// let user

// console.log(typeof(age))
// console.log(typeof(name))
// console.log(typeof(validUser))
// console.log(typeof(user))
// user = "accept"
// console.log(typeof(user))

// console.log(` your age is ${age} your name is ${name} and your username was ${user}`)


//array , array methods

// const title = 'car'
// const price = 122
// const exists = true
// const products = [title,price,exists]

// products [3] =89
// products.push('product 1 ')
// products.unshift('product 2')
// products.pop()
// console.log(products.length);

// const products = ['car',122,true]
// const [title, ... other] = products
// console.log(title);
// console.log(other);


//object

// const products = {
//     title : "book" ,
//     price : 123 ,
//     exixst : true
// }

// const {title , ... other} = products
// console.log(title);
// console.log(other);


// arrays and objects
// const product=[
//     {id : 1,
//     title : "book1" ,
//     price : 43 ,
//     exixst : true},

//     {id : 2,
//     title : "book2" ,
//     price : 51 ,
//     exixst : true},

//     {id : 3,
//     title : "book3" ,
//     price : 26 ,
//     exixst : true}
// ]
// console.log(product);


// JSON Java Script Object Notation


// const product=[
//     {id : 1,
//     title : "book1" ,
//     price : 43 ,
//     exixst : true},

//     {id : 2,
//     title : "book2" ,
//     price : 51 ,
//     exixst : true},

//     {id : 3,
//     title : "book3" ,
//     price : 26 ,
//     exixst : true}
// ]

// const json = JSON.stringify(product)
// const njson = JSON.parse(json)
// console.log(json);



// loops

// const product=[
//     {id : 1,
//     title : "book1" ,
//     price : 43 ,
//     exixst : true},

//     {id : 2,
//     title : "book2" ,
//     price : 51 ,
//     exixst : true},

//     {id : 3,
//     title : "book3" ,
//     price : 26 ,
//     exixst : true}
// ]



// for (let i = 0 ; i<product.length ; i++ ){
//     console.log(product[i].title);
// }



//conditions

// const price = 120
// const newPrice=  120


// if(newPrice>price){
//     console.log("discount added")
// }else if(newPrice<price) {
//     console.log("checked");
// }else{
//     console.log("no discount");
// }



// functions

// function addProduct(title,price){
//     console.log(`title : ${title}  price : ${price}`);
// }
// addProduct('ali' , 16)

// function addProduct(title = 'book2',price= 99){
//     return `title : ${title} - price : ${price}`
// }

// const a = addProduct()
// console.log(a);

// const addProduct = (title,price) => {
//     return `title : ${title} - price : ${price}`
// }

// const a = addProduct('ali' , 12)
// console.log(a);

// const addProduct = (title,price) =>`title : ${title} - price : ${price}`
// const a = addProduct('ali' , 12)
// console.log(a);





//array methods

// const product=[
//     {id : 1,
//     title : "book1" ,
//     price : 43 ,
//     exixst : true},

//     {id : 2,
//     title : "book2" ,
//     price : 51 ,
//     exixst : true},

//     {id : 3,
//     title : "book3" ,
//     price : 26 ,
//     exixst : true}
// ]

// forEach
// product.forEach((item)=>{
    // console.log(item.title);
// })


//Map

// const productMap = product.map((item)=>{
//     return item.title
// })
// console.log(productMap)


//filter

// const filter1 = product.filter((item)=>{
//     return item.exixst === true
// })

// console.log(filter1);


// OOP , Constructor

// function Product (title , price){
//     this.title = title 
//     this.price = price 
//     this.productInfo = function (){
//         return `the book ${this.title} is priced at $${this.price}`
//     }
// }

// const a = new Product('Book 1',65)
// console.log(a.productInfo());


// class

// class Product{
//     constructor(title,price){
//         this.title=title
//         this.price=price
//     }
//     productInfo (){
//         return `the book ${this.title} is priced at $${this.price}`
//     }

// }







//Web Front-End


//DOM Document Object Model

// const form = document.getElementById('form')
// const form = document.getElementsByClassName('container')
// const form = document.getElementsByTagName('div')
// const form = document.querySelector('#form')
// const form = document.querySelectorAll('div')
// console.log(form);


//project

const form = document.querySelector("#form")
const title = document.querySelector("#title")
const price = document.querySelector("#price")
const product = document.querySelector("#products")

const functionAdd = (event) =>{
    event.preventDefault()
    const li = document.createElement("li")
    const productInfo = document.createTextNode(`title ${title.value} price ${price.value}`)
    li.appendChild(productInfo)
    product.appendChild(li)
    title.value = ""
    price.value = ""
}

form.addEventListener("submit" , functionAdd)