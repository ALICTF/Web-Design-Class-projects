"use strict"

var listItems = [
    { id: 1, title: 'title-1', content: 'content-1', img: 'Asset/IMG/sectionimg.png', date: new Date().toLocaleDateString('fa') },
    { id: 2, title: 'title-2', content: 'content-2', img: 'Asset/IMG/sectionimg.png', date: new Date().toLocaleDateString('fa') },
    { id: 3, title: 'title-3', content: 'content-3', img: 'Asset/IMG/sectionimg.png', date: new Date().toLocaleDateString('fa') },
    { id: 4, title: 'title-4', content: 'content-4', img: 'Asset/IMG/sectionimg.png', date: new Date().toLocaleDateString('fa') }
]

listItems.forEach(item => {
    document.querySelector('.res').innerHTML += `
    <div class='col-lg-3 col-md-6 col-12 my-3 mx-auto'>
    <div class="card" style="width: 18rem;">
    <img src="${item.img}" class="card-img-top">
    <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <p class="card-text">${item.content}</p>
    <p>${item.date}</p>
    </div>
    </div>
    </div>`
})


var valid = () => {
    let title = document.querySelector("#titleToDo").value.trim();
    let content = document.querySelector("#ContentToDo").value.trim();
    let isSend = true;
    
    if(!title){
        document.querySelector("#titleToDo").classList.add("is-invalid")
        isSend = false;
    }else{
        document.querySelector("#titleToDo").classList.remove("is-invalid")
        isSend = true;
    }
    if(!content){
        document.querySelector("#ContentToDo").classList.add("is-invalid")
        isSend = false;
    }else{
        document.querySelector("#ContentToDo").classList.remove("is-invalid")
    }
    if (isSend){
        document.querySelector('#btnSub').removeAttribute('disabled')

    }
    if (title && content) {
        document.querySelector('#btnSub').removeAttribute('disabled')
    }else{
        document.querySelector('#btnSub').setAttribute('disabled',true)
    }
}