let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById('modalBtn');
let closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);

closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', outsideClick);

function outsideClick(e){
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

function openModal(){
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}