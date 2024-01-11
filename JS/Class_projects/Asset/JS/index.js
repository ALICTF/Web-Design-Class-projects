let text = "محصول مورد نظر را وارد کنید";
const hTag = document.getElementById('text')
hTag.innerHTML = `<p>${text}</p>` // "<p>" + text + "</p>" 

































// const form = document.querySelector("#form")
// const title = document.querySelector("#title")
// const price = document.querySelector("#price")
// const product = document.querySelector("#products")
// const functionAdd = (event) =>{
//     event.preventDefault()
//     const li = document.createElement("li")
//     const productInfo = document.createTextNode(`title ${title.value} price ${price.value}`)
//     li.appendChild(productInfo)
//     product.appendChild(li)
//     title.value = ""
//     price.value = ""
// }

// form.addEventListener("submit" , functionAdd)