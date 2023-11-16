const burger = document.getElementById('burger');

burger.addEventListener('click', () => {
  document.querySelector('header').classList.toggle('mobile');
  document.querySelector('.navigation').classList.toggle('show');
  document.querySelector('.navigation ul').classList.toggle('mobile');
});


const paslauga = document.getElementById('dropdownButton');

paslauga.addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
})