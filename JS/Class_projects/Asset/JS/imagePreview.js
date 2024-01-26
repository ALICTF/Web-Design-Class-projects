var input = document.getElementById('file-input');
const imgTag = document.querySelector("img")
const previewPhoto = () => {
    let file = input.files;
    console.log(file);
        let fileReader = new FileReader();
        let preview = document.getElementById('file-preview');
        fileReader.onload = function (event) {
            preview.setAttribute('src', event.target.result);
            }
        fileReader.readAsDataURL(file[0]);
        preview.setAttribute('width','400')
        preview.setAttribute('height','400')
        preview.style.display="block"
}
