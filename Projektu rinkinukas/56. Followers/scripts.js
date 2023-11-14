let form = document.getElementById('followers-switch');
let facebook = document.getElementById('pirma');
let youtube = document.getElementById('antra');

form.addEventListener('change',  checkPrice);

function checkPrice() {
    let selectValue = document.querySelector('input[name="group"]:checked').value;
    
    if(selectValue === "facebook") {
        facebook.style.display = 'block';
        youtube.style.display = 'none'
    } else {
        youtube.style.display = 'block';
        facebook.style.display = 'none';
    }
}

checkPrice();