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

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  dots: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})