// var listItems = [
//     { id: 1, title: 'title-1', content: 'content-1', img: 'Asset/IMG/sectionimg.png', date: new Date().toLocaleString('fa') },
//     { id: 2, title: 'title-2', content: 'content-2', img: 'Asset/IMG/sectionimg.png', date: new Date().toLocaleString('fa') },
//     { id: 3, title: 'title-3', content: 'content-3', img: 'Asset/IMG/sectionimg.png', date: new Date().toLocaleString('fa') },
//     { id: 4, title: 'title-4', content: 'content-4', img: 'Asset/IMG/sectionimg.png', date: new Date().toLocaleString('fa') }
// ]
// var valid = () => {
//     let title = document.querySelector("#titleToDo").value.trim();
//     let content = document.querySelector("#ContentToDo").value.trim();
//     let isSend = true;
//     if (!title) {
//         document.querySelector("#titleToDo").classList.add("is-invalid")
//         isSend = false;
//     } else {
//         document.querySelector("#titleToDo").classList.remove("is-invalid")
//         isSend = true;
//     }
//     if (!content) {
//         document.querySelector("#ContentToDo").classList.add("is-invalid")
//         isSend = false;
//     } else {
//         document.querySelector("#ContentToDo").classList.remove("is-invalid")
//     }
//     if (isSend) {
//         document.querySelector('#btnSub').removeAttribute('disabled')
//     } else {
//         document.querySelector('#btnSub').setAttribute('disabled', true)
//     }
// }
// var addToList = () => {
//     // debugger
//     let title = document.querySelector("#titleToDo").value.trim();
//     let content = document.querySelector("#ContentToDo").value.trim();
//     let newItem = {
//         id: listItems.length + 1,
//         title: title,
//         content: content,
//         img: 'Asset/IMG/sectionimg.png',
//         date: new Date().toLocaleString('fa')
//     }
//     listItems.push(
//         newItem
//     )
//     document.querySelector("#titleToDo").value = "";
//     document.querySelector("#ContentToDo").value = "";
//     document.querySelector('#btnSub').setAttribute('disabled', true)
//     document.querySelector('.res').innerHTML += `
//         <div class='col-lg-3 my-3 '>
//         <div class="card" style="width: 18rem;">
//         <img src="${newItem.img}" class="card-img-top">
//         <div class="card-body">
//         <h5 class="card-title">${newItem.title}</h5>
//         <p class="card-text">${newItem.content}</p>
//         <p>${newItem.date}</p>
//         <button class="btn btn-danger" onclick="removeItem(${newItem.id},event)">remove</button>
//         </div>
//         </div>
//         </div>`
// }

// var removeItem = (idItem, ev) => {
    //     ev.currentTarget.parentElement.parentElement.parentElement.remove()
    //     listItems = listItems.filter(item => item.id == idItem)
    // } 

    var response;

const getData = async()=>{
    const skelet = ()=>{
        let skeleton = document.querySelector(".skeleton")
        let counter = 8
        let i = 1
        while(counter>=i){
            skeleton.innerHTML += "<div class='col-lg-3 my-3'><div class='cards'><div class='card is-loading'><div class='image'></div><div class='content'><p></p><h2></h2></div></div></div></div>"
            i++
        }
    }
    skelet()
    let skeleton = document.querySelector(".skeleton")
    let url = "https://fakestoreapi.com/products"
    let fetchReq = await fetch(url,{method: 'GET'})
    response = await fetchReq.json();
    if (!fetchReq){
        skeleton.classList = "d-block"
    }else{
        skeleton.classList= "row mt-5 skeleton d-none"
    }
    response.forEach(item => {
        document.querySelector('.res').innerHTML += `
            <div class='col-lg-3  my-3 '>
            <div class="card  w-100"  >
            <img src="${item.image}"  class="card-img-top   w-50 mx-auto h-100"  >
            <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p>Price : $${item.price}</p>
            <a href="toDoList2.html?idProduct=${item.id}" target="_blank"><button class="btn btn-success"  onclick="removeItem(${item.id},event)">More info</button></a>
            </div>
            </div>
            </div>`
    })
}

const getDataSingle = async()=>{ 
    spinner = document.querySelector(".spinnerJs")
    let serachParams = window.location.search;
    let params = new URLSearchParams(serachParams)
    let productId = params.get("idProduct")
    let url = `https://fakestoreapi.com/products/${productId}`
    let fetchReq = await fetch(url,{method: 'GET'})
    response = await fetchReq.json();
    
    if (!fetchReq){
        spinner.classList.add("d-block")
    }else{
        spinner.classList= "row mt-5 skeleton d-none"
    }
        document.querySelector('.res-single').innerHTML += `
            <div class='col-lg-6 mx-auto my-3 mt-5 '>
            <div class="card  w-100"  >
            <img src="${response.image}"  class="card-img-top mx-auto mt-4"  >
            <div class="card-body mt-5 text-center">
            <h5 class="card-title">${response.title}</h5>
            <p>Price : $${response.price}</p>
            <p>${response.description}</p>
            <button class="btn btn-success" id="liveToastBtn" onclick="addToCart()">add to cart</button>
            </div>
            </div>
            </div>`
}





const addToCart = () => {
    let listItems = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [];
    let findItem = listItems.find(item=> item.id == response.id)
    if(findItem){
        return
    }
    console.log(listItems);
    listItems = listItems.push(response)
    console.log(listItems);

    localStorage.setItem('cartItem' , listItems)
    
}
