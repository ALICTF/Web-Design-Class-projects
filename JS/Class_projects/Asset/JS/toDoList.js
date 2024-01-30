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
// const http = new XMLHttpRequest();
// 
// http.open("GET",url,true)
// http.send()






const getData = async()=>{
    var url = "https://fakestoreapi.com/products"
    let fetchReq = await fetch(url,{method: 'GET',})
    let response = await fetchReq.json();
    response.forEach(item => {
        document.querySelector('.res').innerHTML += `
            <div class='col-lg-3  my-3 '>
            <div class="card  w-100"  >
            <img src="${item.image}"  class="card-img-top   w-75 mx-auto h-100"  >
            <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p>Price : $${item.price}</p>
            <button class="btn btn-success"  onclick="removeItem(${item.id},event)">More info</button>
            </div>
            </div>
            </div>`
    })
}

var removeItem = (idItem, ev) => {
    ev.currentTarget.parentElement.parentElement.parentElement.remove()
    listItems = listItems.filter(item => item.id == idItem)
} 