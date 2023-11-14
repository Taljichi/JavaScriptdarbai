const followers = document.querySelectorAll(".followers");

followers.forEach((followersCounter) => {
  followersCounter.innerHTML = "0";

  const updateFollowersCounter = () => {
    const target = +followersCounter.getAttribute("data-target");
    const c = +followersCounter.innerText;

    const increment = target / 500;

    if (c < target) {
      followersCounter.innerHTML = `${Math.ceil(c + increment)}`;
      setTimeout(updateFollowersCounter, 1);
    } else {
      followersCounter.innerText = target;
    }
  };

  updateFollowersCounter();
});


let form = document.getElementById('followers-switch');
let facebook = document.getElementById('pirma');
let youtube = document.getElementById('antra');

form.addEventListener('change', function() {
    checkPrice();
});

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